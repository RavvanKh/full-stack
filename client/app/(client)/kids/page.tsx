import dynamic from "next/dynamic";

const ShopCategory = dynamic(
  () => import("@/components/pages/client/ShopCategory")
);

const page = () => {
  return <ShopCategory category="kids" banner="/assets/banner_kids.png" />;
};

export default page;
