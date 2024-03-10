import dynamic from "next/dynamic";

const Card = dynamic(() => import("@/components/pages/client/Card"));

const page = () => {
  return <Card />;
};

export default page;
