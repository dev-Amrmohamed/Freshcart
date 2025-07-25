import { useContext, useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { getAllProducts } from "../../services/product-services";
import { productContext } from "../../context/Product.context";
import HomeFeaturesSkeleton from "../skeleton/FeaturedProductSkeleton";

export default function FeaturedProduct() {
  const { isLoading, products, isErorr } = useContext(productContext);
  if (isLoading) {
    return <HomeFeaturesSkeleton />;
  }
  return (
    <>
      <section>
        <div className="container">
          <h2 className="text-2xl font-bold mt-4">Featured Product</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {products.map((product) => (
              <ProductCard key={product.id} productInfo={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
