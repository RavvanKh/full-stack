"use client";
import style from "./item.module.scss";
import { dataResponseType } from "@/types";
import Link from "next/link";

const Item = (product: dataResponseType) => {
  return (
    <div className={style.item}>
      <Link href={`/product/${product?.id}`} onClick={() => scrollTo(0, 0)}>
        <img src={product?.image} alt="item" loading="lazy" />
        <p>{product?.name}</p>
        <div className={style.itemPrices}>
          <div className={style.itemPriceNew}>${product?.new_price}</div>
          <div className={style.itemPriceOld}>${product?.old_price}</div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
