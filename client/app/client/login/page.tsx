import dynamic from "next/dynamic";
import React, { FC } from "react";

const LoginSignup = dynamic(
  () => import("@/components/pages/client/LoginSignup")
);
const page: FC = () => {
  return (
    <>
      <LoginSignup />
    </>
  );
};

export default page;
