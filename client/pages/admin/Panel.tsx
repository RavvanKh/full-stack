import dynamic from "next/dynamic";
import React, { FC } from "react";
import style from "../css/panel.module.scss";
const SideBar = dynamic(() => import("@/components/admin/sidebar/SideBar"));
const Panel: FC = () => {
  return (
    <section className={style.admin}>
      <SideBar />
    </section>
  );
};

export default Panel;
