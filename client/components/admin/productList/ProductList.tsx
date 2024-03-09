"use client";
import React, { FC, useEffect, useState } from "react";
import style from "./productList.module.scss";
import crossIcon from "@/public/assets/cross_icon.png";
import { useShopContext } from "@/context/ShopContext";
import { deleteProduct } from "@/utils/api";
import { dataResponseType } from "@/types";
import Loader from "@/components/loader/Loader";

const ProductList: FC = () => {
  const { isLoading, setIsLoading } = useShopContext();
  const [products, setProducts] = useState<dataResponseType[]>([]);

  const getProducts = () => {
    try {
      setIsLoading(true);
      fetch("http://localhost:4000/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setIsLoading(false);
        })
        .catch((err) => {
          throw new Error(err?.message);
        });
    } catch (err: any) {
      throw new Error(err?.message);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setIsLoading(true);
      deleteProduct(id).then(() => setIsLoading(false));
      getProducts();
    } catch (err: any) {
      throw new Error(err?.message);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className={style.listProduct}>
      <h1>All Products List</h1>
      <div className={style.listProductFormatMain}>
        <p>Products</p>
        <p>Name</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className={style.listProductAllProducts}>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          products?.map((product) => (
            <>
              <div
                className={`${style.listProductFormatMain} ${style.listProductFormat}`}
                key={product?.id}
              >
                <img
                  className={style.listProductItem}
                  src={product?.image}
                  alt={product?.name}
                />
                <p>{product?.name}</p>
                <p>${product?.old_price}</p>
                <p>${product?.new_price}</p>
                <p>{product?.category}</p>
                <img
                  onClick={() => handleDelete(product?.id)}
                  className={style.listProductRemoveIcon}
                  src={crossIcon.src}
                  alt="cross"
                />
              </div>
              <hr />
            </>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
