import dynamic from "next/dynamic";
import React, { FC } from "react";
const ShopCategory = dynamic(
  () => import("@/components/pages/client/ShopCategory")
);
const page: FC = () => {
  return (
    <>
      <ShopCategory category="men" banner="/assets/banner_men.png" />
    </>
  );
};

export default page;
