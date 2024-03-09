import { FC } from "react";
import style from "../css/shopCategory.module.scss";
import dropdownIcon from "@/public/assets/dropdown_icon.png";
import dynamic from "next/dynamic";
import { getProducts } from "@/utils/api";

const Item = dynamic(() => import("@/components/client/item/Item"));


const ShopCategory: FC<{ category: string; banner: string }> = async ({
  category,
  banner,
}) => {
  const allProducts = await getProducts();
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
        {allProducts.map((item) => {
          if (category === item.category) {
            return (
              <Item
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className={style.shopCategoryLoadMore}>Explore More</div>
    </section>
  );
};

export default ShopCategory;
