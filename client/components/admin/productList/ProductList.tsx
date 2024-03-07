import React, { FC } from "react";
import style from "./productList.module.scss";
import { dataProductType, dataResponseType } from "@/types";
import crossIcon from "@/public/assets/cross_icon.png";

const getProducts: () => Promise<dataResponseType[]> = async () => {
  try {
    const res = await fetch("http://localhost:4000/products", {
      next: { revalidate: 60 },
    });
    const data = await res.json();
    return data;
  } catch (err : any) {
    throw new Error(err);
  }
};

const removeProduct = async (id: string) => {
  try {
    await fetch(`http://localhost:4000/products/${id}`, {
      method: "DELETE",
    });
  } catch (err : any) {
    throw new Error(err?.message);
  }
};
const ProductList: FC = async () => {
  const products = await getProducts();
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
        {products.map((product) => (
          <>
            <div
              className={`${style.listProductFormatMain} ${style.listProductFormat}`}
              key={product?.id}
            >
              <img
                className={style.listProductItem}
                src={product?.image.src}
                alt={product?.name}
              />
              <p>{product?.name}</p>
              <p>${product?.old_price}</p>
              <p>${product?.new_price}</p>
              <p>{product.category}</p>
              <img
                className={style.listProductRemoveIcon}
                src={crossIcon.src}
                alt="cross"
              />
            </div>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
