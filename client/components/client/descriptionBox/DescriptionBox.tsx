import React from "react";
import style from "./descriptionBox.module.scss";

const DescriptionBox = () => {
  return (
    <section className={style.descriptionBox}>
      <div className={style.descriptionBoxNavigator}>
        <div className={style.descriptionBoxNavBox}>Description</div>
        <div className={`${style.descriptionBoxNavBox} ${style.fade}`}>
          Reviews (122)
        </div>
      </div>
      <div className={style.descriptionBoxDescription}>
        <p>Description</p>
        <p></p>
      </div>
    </section>
  );
};

export default DescriptionBox;
