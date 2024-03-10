import { getProduct } from "@/utils/api";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

const BreadCrumb = dynamic(
  () => import("@/components/client/breadCrumbs/BreadCrumb")
);
const DescriptionBox = dynamic(
  () => import("@/components/client/descriptionBox/DescriptionBox")
);
const ProductDisplay = dynamic(
  () => import("@/components/client/productDisplay/ProductDisplay")
);
const RelatedProducts = dynamic(
  () => import("@/components/client/relatedProducts/RelatedProducts")
);

const Product = async ({ id = " " }: { id: string }) => {
  const product = await getProduct(id);
  if (!product) {
    notFound();
  }
  return (
    <section>
      <BreadCrumb product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts type={product.category} differ={product.id} />
    </section>
  );
};

export default Product;
