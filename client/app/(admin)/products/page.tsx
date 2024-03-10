import dynamic from "next/dynamic";

const ProductList = dynamic(
  () => import("@/components/admin/productList/ProductList")
);
const page = () => {
  return <ProductList />;
};

export default page;
