import dynamic from "next/dynamic";
import React, { FC } from "react";

const Product = dynamic(() => import("@/pages/client/Product"));
const page: FC<{ params: { id: string } }> = ({ params }) => {
  return (
    <>
      <Product id={params.id} />
    </>
  );
};

export default page;
