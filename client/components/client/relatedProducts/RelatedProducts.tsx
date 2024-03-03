import React from "react";
import style from "./relatedProducts.module.scss";
import { dataProductType } from "@/types";
import dynamic from "next/dynamic";
import data_product from "@/components/assets/data";

const Item = dynamic(() => import("../item/Item"));

const RelatedProducts = () => {
  return (
    <section className={style.relatedProducts}>
      <h1>Related Products</h1>
      <hr />
      <div className={style.relatedProductsItem}>
        {data_product.map((item: dataProductType) => (
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
