import React, { FC } from "react";
import style from "./popular.module.scss";
import data_product from "../../assets/data";
import dynamic from "next/dynamic";

const Item = dynamic(() => import("../item/Item"));

// const getProducts: () => Promise<{
//   products: dataProductType[];
// }> = async () => {
//   const res = await fetch("http://localhost:5000/products");
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// };
const Popular: FC = () => {
  // const allProducts = await getProducts();
  // console.log(allProducts);
  return (
    <section className={style.popular}>
      <h1>Popular in Women</h1>
      <hr />
      <div className={style.popularItem}>
        {data_product?.map((item) => (
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
