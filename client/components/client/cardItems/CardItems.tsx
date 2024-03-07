"use client";
import React from "react";
import style from "./cardItems.module.scss";
import { useShopContext } from "@/context/ShopContext";
import removeIcon from "@/public/assets/cart_cross_icon.png";

const CardItems = () => {
  const { all_product, cardItems, removeFromCard, getTotalCardAmount } =
    useShopContext();
  return (
    <section className={style.cardItems}>
      <div className={style.cardItemsFormatMain}>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product?.map((item) => {
        if (cardItems?.[item?.id] > 0) {
          return (
            <div key={item.id}>
              <div
                className={`${style.cardItemFormat} ${style.cardItemsFormatMain}`}
              >
                <img
                  src={item.image.src}
                  alt={`${item.name}-image`}
                  className={style.cardItemProductIcon}
                />
                <p>{item.name}</p>
                <p>${item.new_price}</p>
                <button className={style.cardItemQuantity}>
                  {cardItems[item.id]}
                </button>
                <p>{item.new_price * cardItems[item.id]}</p>
                <img
                  className={style.cardItemRemoveIcon}
                  src={removeIcon.src}
                  onClick={() => removeFromCard(item.id)}
                  alt=""
                />
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className={style.cardItemsDown}>
        <div className={style.cardItemsTotal}>
          <h1>Card Totals</h1>
          <div>
            <div className={style.cardItemsTotalItem}>
              <p>SubTotal</p>
              <p>${getTotalCardAmount()}</p>
            </div>
            <hr />
            <div className={style.cardItemsTotalItem}>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className={style.cardItemsTotalItem}>
              <h3>Total</h3>
              <h3>${getTotalCardAmount()}</h3>
            </div>
          </div>
          <button>Proceed to Checkout</button>
        </div>
        <div className={style.cardItemsPromocode}>
          <p>If you have a promocode. Enter it here</p>
          <div className={style.cardItemsPromoBox}>
            <input type="text" placeholder="Promocode" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardItems;
