import dynamic from "next/dynamic";
import React, { FC } from "react";

const ShopCategory = dynamic(() => import("@/pages/client/ShopCategory"));
const page: FC = () => {
  return (
    <>
      <ShopCategory category="kids" banner="/assets/banner_kids.png" />
    </>
  );
};

export default page;
