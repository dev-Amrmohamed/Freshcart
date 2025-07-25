import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faRotateLeft,
  faShareNodes,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import Ratings from "../../Components/Ratings/Ratings";
import { calcDiscount } from "../../utils/discount";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";
import { CartContext } from "../../context/Cart.context";

export default function ProductInfo({ productDetails }) {
  const {
    id,
    title,
    ratingsQuantity,
    ratingsAverage,
    quantity,
    price,
    priceAfterDiscount,
    images,
    description,
  } = productDetails;
  const [count, setCount] = useState(0);
  const { handelAddingProductToCart } = useContext(CartContext);
  function countIncreseHandler() {
    setCount(count + 1);
  }
  function countDecreseHandler() {
    count > 0 ? setCount(count - 1) : "";
  }
  return (
    <>
      <section className="mt-15">
        <div className="container ">
          <div className="">
            <div className="grid grid-cols-12 gap-8">
              {/* right */}
              <div className="col-span-12 sm:col-span-12 lg:col-span-3">
                <ReactImageGallery
                  showNav={false}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  items={images.map((image) => {
                    return {
                      original: image,
                      thumbnail: image,
                    };
                  })}
                />
              </div>
              {/* left */}
              <div className="col-span-12 sm:col-span-12 lg:col-span-9 p-4 ">
                <div className="space-y-3">
                  <div className="head flex justify-between items-center">
                    {quantity > 0 ? (
                      <span className="bg-primary-200 py-1 px-2 text-primary-800 rounded-md text-sm">
                        in stock
                      </span>
                    ) : (
                      <span className="bg-red-500 py-1 px-2 text-white rounded-md text-sm">
                        out of stock
                      </span>
                    )}

                    <div className="icons flex gap-2 *:text-gray-400">
                      <FontAwesomeIcon icon={faShareNodes} />
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                  </div>
                  <div className="product-info mt-5">
                    <p className="text-xl font-semibold">{title}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Ratings ratings={ratingsAverage} />
                    <span className="text-sm text-gray-500">{ratingsAverage}</span>
                    <span className="text-sm text-gray-500">({ratingsQuantity})</span>
                  </div>
                  <div className="price flex items-center gap-2">
                    {priceAfterDiscount ? (
                      <>
                        <h4 className="text-2xl font-bold">{price} EGP</h4>
                        <del className="text-lg text-gray-500">{priceAfterDiscount} EGP</del>
                        <span className="badage bg-red-100 px-2 py-0.5 rounded-md text-red-600">
                          Save {calcDiscount({ price, priceAfterDiscount })}%
                        </span>
                      </>
                    ) : (
                      <h4 className="text-2xl font-bold">{price} EGP</h4>
                    )}
                  </div>
                </div>

                <div className="space-y-5 mt-10">
                  <p className="text-gray-700">{description}</p>
                  <div className="counter flex items-center gap-7 ">
                    <span className="text-gray-700">Quantity:</span>
                    <div className="border border-gray-300 px-2 py-1 flex items-center gap-8">
                      <button onClick={countDecreseHandler}> - </button>
                      <span>{count}</span>
                      <button onClick={countIncreseHandler}> + </button>
                    </div>
                    <p className="text-gray-700">Only ${quantity} items left in Stock</p>
                  </div>
                </div>

                <div className="flex mt-7 gap-3 w-full *:w-full">
                  <button
                    className="btn py-4 flex gap-2 justify-center items-center text-white bg-primary-500 hover:bg-primary-600 transition-colors duration-200 "
                    onClick={() => {
                      handelAddingProductToCart({ id });
                    }}
                  >
                    <FontAwesomeIcon icon={faCartShopping} />
                    Add To Cart
                  </button>
                  <button className="btn py-4 bg-white border border-gray-200 hover:bg-primary-500 hover:text-white transition-colors duration-200">
                    Buy Now
                  </button>
                </div>

                <div className="icons mt-10 flex justify-between">
                  <div className="item flex items-center gap-3">
                    <div className="bg-primary-200 size-10 flex justify-center items-center rounded-full">
                      <FontAwesomeIcon className="text-primary-600" icon={faTruckFast} />
                    </div>

                    <div>
                      <p>Free Dlivery</p>
                      <span className="text-gray-500">Free shipping on orders over $50</span>
                    </div>
                  </div>
                  <div className="item flex items-center gap-3">
                    <div className="bg-primary-200 size-10 flex justify-center items-center rounded-full">
                      <FontAwesomeIcon className="text-primary-600" icon={faRotateLeft} />
                    </div>

                    <div>
                      <p>Free Dlivery</p>
                      <span className="text-gray-500">Free shipping on orders over $50</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
