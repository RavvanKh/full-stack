import dynamic from "next/dynamic";
import React, { FC } from "react";

const Product = dynamic(() => import("@/pages/client/Product"));
const page: FC<{ params: { id: number } }> = ({ params }) => {
  return (
    <>
      <Product id={Number(params.id)} />
    </>
  );
};

export default page;
