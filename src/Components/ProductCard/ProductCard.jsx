import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faRepeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { calcDiscount } from "../../utils/discount";
import Ratings from "../Ratings/Ratings";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";
import { WishlistContext } from "../../context/Wishlist.context";

export default function ProductCard({ productInfo }) {
  const {
    id,
    title,
    ratingsAverage,
    ratingsQuantity,
    priceAfterDiscount,
    price,
    imageCover,
    category,
  } = productInfo;

  const { handelAddingProductToCart } = useContext(CartContext);
  const { handleAddingProductToWishlist } = useContext(WishlistContext);
  return (
    <>
      <div className="card space-y-2 relative shadow-lg overflow-hidden cursor-pointer ">
        <div>
          <img src={imageCover} alt="img" className="h-60 mx-auto" />
        </div>
        <div className="card_body card space-y-3 p-4">
          <div>
            <span className="text-gray-500 text-sm">{category.name}</span>
            <Link className="block" to={`/product/${id}`}>
              <h2 className="font-semibold line-clamp-1">{title}</h2>
            </Link>
          </div>
          <div className="ratings flex items-center gap-2">
            <Ratings ratings={ratingsAverage} />
            <div className="text-gray-400 text-sm font-semibold">
              <span>{ratingsAverage}</span>
              <span>({ratingsQuantity})</span>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-3">
              <p className="font-bold text-primary-500 ">
                {" "}
                {priceAfterDiscount ? priceAfterDiscount : price} EGP
              </p>
              {priceAfterDiscount && <del className="text-gray-500">{price} EGP</del>}
            </div>
            <button
              className="btn p-0 size-8 flex justify-center items-center rounded-full text-white bg-primary-500 hover:bg-primary-700 transition-colors duration-200"
              onClick={() => {
                handelAddingProductToCart({ id });
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
        <div className="actions absolute right-4 top-5 flex flex-col gap-4 *:text-gray-500 *:hover:text-primary-500 *:transition-colors *:duration-200">
          <FontAwesomeIcon
            icon={faHeart}
            onClick={() => {
              handleAddingProductToWishlist({ id });
            }}
          />
          <FontAwesomeIcon icon={faRepeat} />
          <FontAwesomeIcon icon={faEye} />
        </div>

        {priceAfterDiscount && (
          <span className="badage absolute left-4 top-4 bg-red-600 px-2 py-1 text-white rounded-md">
            -{calcDiscount({ price, priceAfterDiscount })}%
          </span>
        )}
      </div>
    </>
  );
}
