import style from "./breadCrumb.module.scss";
import { dataProductType } from "@/types";
import arrowIcon from "@/public/assets/breadcrum_arrow.png";

const BreadCrumb = ({ product }: { product: dataProductType }) => {
  return (
    <div className={style.breadCrumb}>
      Home <img src={arrowIcon.src} alt="arrowIcon" /> Shop{" "}
      <img src={arrowIcon.src} alt="arrowIcon" /> {product.category}{" "}
      <img src={arrowIcon.src} alt="arrowIcon" /> {product.name}
    </div>
  );
};

export default BreadCrumb;
