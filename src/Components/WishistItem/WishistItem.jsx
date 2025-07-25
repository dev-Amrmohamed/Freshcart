import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Ratings from "../Ratings/Ratings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";
import { WishlistContext } from "../../context/Wishlist.context";

export default function WishistItem({ productInfo }) {
  // console.log(productInfo);
  const { id } = productInfo;
  const { handelAddingProductToCart } = useContext(CartContext);
  const { handelRemoveItemFromWishlist } = useContext(WishlistContext);
  return (
    <>
      <div className={`item flex justify-between items-center mt-10 `}>
        <div className="info flex ">
          <img src={productInfo.imageCover} className="size-30 rounded-lg" alt="" />
          <div className="ms-5 space-y-2">
            <div>
              <span className="text-sm text-gray-600">{productInfo.category.name}</span>
              <h4 className="font-bold text-xl">{productInfo.title}</h4>
            </div>
            <div className="rate flex gap-2">
              <Ratings ratings={productInfo.ratingsAverage} />
              <div className="space-x-1 ">
                <span>{productInfo.ratingsAverage}</span>
                <span>({productInfo.ratingsQuantity})</span>
              </div>
            </div>

            <p className="text-primary-600 font-bold">{productInfo.price} EGP</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4"></div>

        <div>
          <button
            className="btn font-normal bg-primary-600 text-white me-3"
            onClick={() => {
              handelAddingProductToCart({ id });
            }}
          >
            Add to Cart
          </button>
          <button
            onClick={() => {
              handelRemoveItemFromWishlist({ id });
            }}
          >
            <FontAwesomeIcon icon={faTrashCan} className="text-gray-500" />
          </button>
        </div>
      </div>
    </>
  );
}
