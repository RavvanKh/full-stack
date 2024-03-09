import React, { FC } from "react";
import style from "./popular.module.scss";
import dynamic from "next/dynamic";
import { getProducts } from "@/utils/api";

const Item = dynamic(() => import("../item/Item"));

const Popular: FC = async () => {
  const allProducts = await getProducts();
  console.log(allProducts);
  return (
    <section className={style.popular}>
      <h1>Popular in Women</h1>
      <hr />
      <div className={style.popularItem}>
        {allProducts?.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </section>
  );
};

export default Popular;
