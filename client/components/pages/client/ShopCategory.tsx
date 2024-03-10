import style from "../css/shopCategory.module.scss";
import dropdownIcon from "@/public/assets/dropdown_icon.png";
import dynamic from "next/dynamic";
import { getProducts } from "@/utils/api";

const Item = dynamic(() => import("@/components/client/item/Item"));

const ShopCategory = async ({
  category = "",
  banner = " ",
}: {
  category: string;
  banner: string;
}) => {
  const allProducts = await getProducts(`type=${category}`);
  return (
    <section className={style.shopCategory}>
      <img
        src={banner}
        alt={`${category}-banner`}
        className={style.shopCategoryBanner}
      />
      <div className={style.shopCategoryIndexSort}>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className={style.shopCategorySort}>
          Sort by <img src={dropdownIcon.src} alt="dropdown" />
        </div>
      </div>
      <div className={style.shopCategoryProducts}>
        {allProducts.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            image={item.image}
            category={item.category}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      <div className={style.shopCategoryLoadMore}>Explore More</div>
    </section>
  );
};

export default ShopCategory;
