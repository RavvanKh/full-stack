import dynamic from "next/dynamic";
import React, { FC } from "react";

const LoginSignup = dynamic(
  () => import("@/components/pages/client/LoginSignup")
);
const page = () => {
  return <LoginSignup />;
};

export default page;
