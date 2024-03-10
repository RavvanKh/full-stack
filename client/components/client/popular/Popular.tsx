import style from "./popular.module.scss";
import dynamic from "next/dynamic";
import { getProducts } from "@/utils/api";

const Item = dynamic(() => import("../item/Item"));

const Popular = async () => {
  const allProducts = await getProducts("type=women");
  return (
    <section className={style.popular}>
      <h1>Popular in Women</h1>
      <hr />
      <div className={style.popularItem}>
        {allProducts?.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            category={item.category}
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
