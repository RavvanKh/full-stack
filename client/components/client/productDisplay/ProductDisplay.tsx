'use client'
import React, { FC } from "react";
import style from "./productDisplay.module.scss";
import {dataResponseType } from "@/types";
import starIcon from "@/public/assets/star_icon.png";
import starDullIcon from "@/public/assets/star_dull_icon.png";
import { useShopContext } from "@/context/ShopContext";

const ProductDisplay: FC<{ product: dataResponseType }> = ({ product }) => {
  const {addToCard} = useShopContext()
  return (
    <section className={style.productDisplay}>
      <div className={style.productDisplayLeft}>
        <div className={style.productDisplayImgList}>
          <img src={product.image.src} alt={product.name} />
          <img src={product.image.src} alt={product.name} />
          <img src={product.image.src} alt={product.name} />
          <img src={product.image.src} alt={product.name} />
        </div>
        <div className={style.productDisplayImg}>
          <img
            src={product.image.src}
            alt={product.name}
            className={style.productDisplayMainImg}
          />
        </div>
      </div>
      <div className={style.productDisplayRight}>
        <h1>{product.name}</h1>
        <div className={style.productDisplayRightStars}>
          <img src={starIcon.src} alt="star" />
          <img src={starIcon.src} alt="star" />
          <img src={starIcon.src} alt="star" />
          <img src={starIcon.src} alt="star" />
          <img src={starDullIcon.src} alt="star" />
          <p>(122)</p>
        </div>
        <div className={style.productDisplayRightPrices}>
          <div className={style.productDisplayRightPriceOld}>
            ${product.old_price}
          </div>
          <div className={style.productDisplayRightPriceNew}>
            ${product.new_price}
          </div>
        </div>
        <div className={style.productDisplayRightDescription}>
          Product Description In Here
        </div>
        <div className={style.productDisplayRightSizes}>
          <h1>Select Size</h1>
          <div className={style.productDisplayRightSize}>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => addToCard(product.id)}>Add to Card</button>
        <p className={style.productDisplayRightCategory}><span>Category:</span> Women, T-Shirt, Crop Top</p>
        <p className={style.productDisplayRightCategory}><span>Tags:</span> Modern, Latest</p>
      </div>
    </section>
  );
};

export default ProductDisplay;
