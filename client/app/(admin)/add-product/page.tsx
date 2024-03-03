import dynamic from "next/dynamic";
import React, { FC } from "react";

const AddProduct = dynamic(
  () => import("@/components/admin/addProduct/AddProduct")
);
const page: FC = () => {
  return (
    <>
      <AddProduct />
    </>
  );
};

export default page;
