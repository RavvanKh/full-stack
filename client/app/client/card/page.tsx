import dynamic from "next/dynamic";
import React, { FC } from "react";

const Card = dynamic(() => import("@/pages/client/Card"));

const page: FC = () => {
  return (
    <>
      <Card />
    </>
  );
};

export default page;
