import { useContext, useState } from "react";
import ProductInfoTap from "../ProductDetailsTaps/ProductInfoTap";
import ProductReviewsTap from "../ProductDetailsTaps/ProductReviewsTap";
import ProductShippingTap from "../ProductDetailsTaps/ProductShippingTap";
import { CartContext } from "../../context/Cart.context";

export default function ProductDetailsTaps({ productDetails }) {
  const [activeTap, setActiveTap] = useState("deatils");
  const { handelAddingProductToCart } = useContext(CartContext);
  function handleProductsTaps() {
    switch (activeTap) {
      case "details":
        return <ProductInfoTap productDetails={productDetails} />;
      case "reviews":
        return <ProductReviewsTap productDetails={productDetails} />;
      case "shipping":
        return <ProductShippingTap productDetails={productDetails} />;
      default:
        return <ProductInfoTap productDetails={productDetails} />;
    }
  }
  return (
    <>
      <section className="my-10">
        <div className="container">
          <div className="border-b border-gray-200">
            <div className="flex gap-10 *:font-medium *:px-6 *:py-4 *:cursor-pointer">
              <button
                className={`${
                  activeTap === "details" && `text-primary-600 border-b-2 border-primary-600`
                }text-gray-600`}
                onClick={() => setActiveTap("details")}
              >
                Product Details
              </button>
              <button
                className={`${
                  activeTap === "reviews" && `text-primary-600 border-b-2 border-primary-600`
                }text-gray-600`}
                onClick={() => setActiveTap("reviews")}
              >
                Reviews
              </button>
              <buttonc
                className={`${
                  activeTap === "shipping" && `text-primary-600 border-b-2 border-primary-600`
                }text-gray-600`}
                onClick={() => setActiveTap("shipping")}
              >
                Shipping & Returns
              </buttonc>
            </div>
          </div>

          <div className="p-6">{handleProductsTaps()}</div>
        </div>
      </section>
    </>
  );
}
