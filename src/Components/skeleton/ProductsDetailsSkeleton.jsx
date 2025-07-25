import React from "react";
import ProductInfoSkeleton from "./ProductInfoSkeleton";
import ProductDetailsTapsSkeleton from "./ProductDetailsTapsSkeleton";
import RelatedProductSkeleton from "./RelatedProductSkeleton";

export default function ProductsDetailsSkeleton() {
  return (
    <>
      <ProductInfoSkeleton />
      <ProductDetailsTapsSkeleton />
      <RelatedProductSkeleton />
    </>
  );
}
