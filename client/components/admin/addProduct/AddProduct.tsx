"use client";
import React, { ChangeEvent, FC, Fragment, useState } from "react";
import style from "./addProduct.module.scss";
import uploadArea from "@/public/assets/upload_area.svg";
import { dataProductType } from "@/types";
import { v4 as id } from "uuid";
import { Transition } from "@headlessui/react";
const AddProduct: FC = () => {
  const [image, setImage] = useState<Blob>();
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [productDetails, setProductDetails] = useState<dataProductType>({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const img: undefined | File = e.target.files?.[0];
    if (img) {
      setImage(img);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const handleAdd = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    let responseData = { image_url: "" };
    let product = productDetails;
    const formData = new FormData();
    image && formData.append("product", image);
    const res = await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });
    if (!res.ok) {
      const errorData = await res.json();
      const errorMessage = errorData.err;
      throw new Error(errorMessage);
    } else {
      const data: { image_url: string } = await res.json();
      responseData = data;
      product.image = responseData.image_url;
      const response = await fetch(`http://localhost:4000/products/${id()}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData?.err;
        throw new Error(errorMessage);
      } else {
        const data = await response.json();
        setName(data?.name);
        setIsShowing(true);
        setTimeout(() => {
          setIsShowing(false);
        }, 2500);
        setProductDetails({
          image: "",
          name: "",
          new_price: "",
          old_price: "",
          category: "women",
        });
      }
    }
  };
  return (
    <section className={style.addProduct}>
      <Transition
        show={isShowing}
        as={Fragment}
        enter={style.enter}
        enterFrom={style.enterFrom}
        enterTo={style.enterTo}
        leave={style.leave}
        leaveFrom={style.leaveFrom}
        leaveTo={style.leaveTo}
      >
        <div className={style.popup}>{name} was added</div>
      </Transition>
      <form className={style.addProductItemFields} onSubmit={handleAdd}>
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Type here"
          value={productDetails?.name}
          onChange={handleChange}
        />
        <div className={style.prices}>
          <div>
            <label htmlFor="price">Price</label>
            <input
              value={productDetails?.old_price}
              onChange={handleChange}
              type="number"
              name="old_price"
              id="price"
              placeholder="Type here"
              min={0}
            />
          </div>
          <div>
            <label htmlFor="offer-price">Offer Price</label>
            <input
              value={productDetails?.new_price}
              onChange={handleChange}
              type="number"
              name="new_price"
              id="offer-price"
              placeholder="Type here"
              min={0}
            />
          </div>
        </div>
        <label htmlFor="category">Product Category</label>
        <select
          name="category"
          id="category"
          className={style.addProductSelector}
          onChange={handleChange}
          value={productDetails?.category}
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kids">Kids</option>
        </select>

        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : uploadArea.src}
            alt="file"
            className={style.addProductImg}
          />
        </label>
        <input
          type="file"
          name="file-input"
          id="file-input"
          hidden
          onChange={handleImage}
        />
        <button className={style.addProductBtn} type="submit">
          Add
        </button>
      </form>
    </section>
  );
};

export default AddProduct;
