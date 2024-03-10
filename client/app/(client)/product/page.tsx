import dynamic from "next/dynamic";

const Product = dynamic(() => import("@/components/pages/client/Product"));
const page = () => {
  return <Product id="986f13c6-4723-40ce-93af-ac097ebf3296" />;
};

export default page;
