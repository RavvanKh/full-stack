import style from "./newCollections.module.scss";
import dynamic from "next/dynamic";
import { getProducts } from "@/utils/api";

const Item = dynamic(() => import("../item/Item"));

const NewCollections = async () => {
  const newCollections = await getProducts('type=new');
  return (
    <section className={style.newCollections}>
      <h1>New Collections</h1>
      <hr />
      <div className={style.collections}>
        {newCollections.map((item) => (
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

export default NewCollections;
