import dynamic from "next/dynamic";

const AddProduct = dynamic(
  () => import("@/components/admin/addProduct/AddProduct")
);
const page = () => {
  return <AddProduct />;
};

export default page;
