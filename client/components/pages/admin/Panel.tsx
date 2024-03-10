import dynamic from "next/dynamic";
import style from "../css/panel.module.scss";
const SideBar = dynamic(() => import("@/components/admin/sidebar/SideBar"));
const Panel = () => {
  return (
    <section className={style.admin}>
      <SideBar />
    </section>
  );
};

export default Panel;
