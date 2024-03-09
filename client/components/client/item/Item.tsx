"use client";
import React, { FC } from "react";
import style from "./item.module.scss";
import { dataResponseType } from "@/types";
import Link from "next/link";

const Item: FC<dataResponseType> = (props) => {
  return (
    <div className={style.item}>
      <Link href={`/product/${props.id}`} onClick={() => scrollTo(0, 0)}>
        <img src={props.image} alt="item" loading="lazy" />
        <p>{props.name}</p>
        <div className={style.itemPrices}>
          <div className={style.itemPriceNew}>${props.new_price}</div>
          <div className={style.itemPriceOld}>${props.old_price}</div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
