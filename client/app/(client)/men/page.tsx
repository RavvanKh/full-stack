import dynamic from "next/dynamic";
const ShopCategory = dynamic(
  () => import("@/components/pages/client/ShopCategory")
);
const page = () => {
  return <ShopCategory category="men" banner="/assets/banner_men.png" />;
};

export default page;
