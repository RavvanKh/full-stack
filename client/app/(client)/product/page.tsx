import dynamic from "next/dynamic";
import React, { FC } from "react";

const Product = dynamic(() => import("@/pages/client/Product"));
const page: FC = () => {
  return (
    <>
      <Product id={1} />
    </>
  );
};

export default page;
