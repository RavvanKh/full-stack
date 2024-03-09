import dynamic from "next/dynamic";
import React, { FC } from "react";

const ProductList = dynamic(
  () => import("@/components/admin/productList/ProductList")
);
const page: FC = () => {
  return (
    <>
      <ProductList  />
    </>
  );
};

export default page;
