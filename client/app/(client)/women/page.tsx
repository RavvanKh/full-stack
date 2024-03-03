import dynamic from "next/dynamic";
import React, { FC } from "react";

const ShopCategory = dynamic(() => import("@/pages/client/ShopCategory"));
const page: FC = () => {
  return (
    <>
      <ShopCategory category="women" banner="/assets/banner_women.png" />
    </>
  );
};

export default page;
