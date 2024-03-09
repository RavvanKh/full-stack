import dynamic from "next/dynamic";
import React, { FC } from "react";

const Product = dynamic(() => import("@/pages/client/Product"));
const page: FC = () => {
  return (
    <>
      <Product id="986f13c6-4723-40ce-93af-ac097ebf3296" />
    </>
  );
};

export default page;
