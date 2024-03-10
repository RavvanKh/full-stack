import dynamic from "next/dynamic";

const Product = dynamic(() => import("@/components/pages/client/Product"));
const page = ({ params }: { params: { id: string } }) => {
  return <Product id={params.id || ""} />;
};

export default page;
