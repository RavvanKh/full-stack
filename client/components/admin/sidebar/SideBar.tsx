import React, { FC } from "react";
import style from "./sidebar.module.scss";
import Link from "next/link";
import addProductIcon from "@/public/assets/Product_Cart.svg";
import listProductsIcon from "@/public/assets/Product_list_icon.svg";
const SideBar: FC = () => {
  return (
    <aside className={style.sideBar}>
      <Link href="/add-product">
        <div className={style.sideBarItem}>
          <img src={addProductIcon.src} alt="add" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link href="/products">
        <div className={style.sideBarItem}>
          <img src={listProductsIcon.src} alt="add" />
          <p>Product List</p>
        </div>
      </Link>
    </aside>
  );
};

export default SideBar;
