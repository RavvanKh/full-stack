import dynamic from "next/dynamic";

const ShopCategory = dynamic(
  () => import("@/components/pages/client/ShopCategory")
);
const page = () => {
  return <ShopCategory category="women" banner="/assets/banner_women.png" />;
};

export default page;
