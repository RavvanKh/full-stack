import dynamic from "next/dynamic";
import React, { ReactNode } from "react";
import style from "./layout.module.scss";

const Navbar = dynamic(() => import("@/components/admin/navbar/Navbar"));
const Panel = dynamic(() => import("@/pages/admin/Panel"));

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <Navbar />
      <section className={style.layout}>
        <Panel />
        {children}
      </section>
    </section>
  );
};

export default AdminLayout;
