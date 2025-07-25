import { useEffect, useState } from "react";
import ProductInfo from "../../Components/ProductInfo/ProductInfo";
import { useParams } from "react-router";
import { getProductById } from "../../services/product-services";
import ProductDetailsTaps from "../../Components/productDetailsTaps/productDetailsTaps";
import RelatedProduct from "../../Components/RelatedProduct/RelatedProduct";
import ProductsDetailsSkeleton from "../../Components/skeleton/ProductsDetailsSkeleton";
export default function ProductsDetails() {
  const [productDetails, setProductDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);

  const { id } = useParams();
  async function featchProductDeatils() {
    try {
      setIsLoading(true);
      const response = await getProductById({ id });
      if (response.success) {
        setIsLoading(false);
        setProductDetails(response.data.data.data);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  }

  useEffect(() => {
    featchProductDeatils();
  }, [id]);

  if (isLoading) {
    return <ProductsDetailsSkeleton />;
  }
  return (
    <>
      {productDetails ? (
        <ProductInfo productDetails={productDetails} />
      ) : (
        <ProductsDetailsSkeleton />
      )}
      <ProductDetailsTaps productDetails={productDetails} />
      <RelatedProduct productDetails={productDetails} />
    </>
  );
}
