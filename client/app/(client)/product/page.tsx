import dynamic from "next/dynamic";
import React, { FC } from "react";

const Product = dynamic(() => import("@/pages/Product"));
const page: FC = () => {
  return (
    <>
      <Product id="" />
    </>
  );
};

export default page;
