import React from "react";
import style from "./relatedProducts.module.scss";
import dynamic from "next/dynamic";
import { getProducts } from "@/utils/api";

const Item = dynamic(() => import("../item/Item"));

const RelatedProducts = async ({
  type,
  differ,
}: {
  type: string;
  differ: string;
}) => {
  const products = await getProducts(`type=${type}&differ=${differ}`);
  return (
    <section className={style.relatedProducts}>
      <h1>Related Products</h1>
      <hr />
      <div className={style.relatedProductsItem}>
        {products.map((item) => (
          <Item
            id={item.id}
            name={item.name}
            category={item.category}
            key={item.id}
            image={item.image}
            old_price={item.old_price}
            new_price={item.new_price}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
