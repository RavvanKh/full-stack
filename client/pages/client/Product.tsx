"use client";
import { useShopContext } from "@/context/ShopContext";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import React, { FC } from "react";

const BreadCrumb = dynamic(() => import('@/components/client/breadCrumbs/BreadCrumb'))
const DescriptionBox = dynamic(() => import('@/components/client/descriptionBox/DescriptionBox'))
const ProductDisplay = dynamic(() => import('@/components/client/productDisplay/ProductDisplay'))
const RelatedProducts = dynamic(() => import('@/components/client/relatedProducts/RelatedProducts'))

const Product: FC<{ id: number }> = ({ id }) => {
  const { all_product } = useShopContext();
  const product = all_product.find((e) => e.id === id);
  if (!product) {
    notFound();
  }
  return (
    <section>
      <BreadCrumb product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </section>
  );
};

export default Product;
