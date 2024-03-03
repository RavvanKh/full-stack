import dynamic from "next/dynamic";
import React from "react";

const Loader = dynamic(() => import("@/components/loader/Loader"));
const Loading = () => {
  return (
    <>
      <Loader />
    </>
  );
};

export default Loading;
