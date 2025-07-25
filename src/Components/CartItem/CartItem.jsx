import { useContext, useState } from "react";
import Ratings from "../Ratings/Ratings";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from "../../context/Cart.context";
export default function CartItem(productInfo) {
  const { count, price, product } = productInfo.productInfo;
  const { id } = product;
  const [isUpdating, setIsUpdating] = useState(false);
  const { handelRemoveItemFromCart, handleUpdateQuantity } = useContext(CartContext);

  async function handelUpdate({ id, count }) {
    setIsUpdating(true);
    handleUpdateQuantity({ id, count });
    setIsUpdating(false);
  }
  return (
    <>
      <div className={`item flex justify-between mt-10 ${isUpdating && "opacity-70"}`}>
        <div className="info flex ">
          <img src={product.imageCover} className="size-30 rounded-lg" alt="" />
          <div className="ms-5 space-y-2">
            <div>
              <h4 className="font-bold text-xl">{product.title}</h4>
              <p className=" text-gray-600">{product.category.name}</p>
            </div>
            <div className="rate flex gap-2">
              <Ratings ratings={product.ratingsAverage} />
              <div className="space-x-1 ">
                <span>{product.ratingsAverage}</span>
                <span>({product.quantity})</span>
              </div>
            </div>
          </div>
        </div>
        <div className="counterer flex justify-center items-center gap-4">
          <div className="flex justify-center items-center gap-0 rounded-xl px-0 py-0 ">
            <div className="border border-gray-300 rounded-s-lg p-2">
              <button
                onClick={() => {
                  handelUpdate({ id, count: count - 1 });
                }}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
            </div>
            <div className="border-y border-gray-300 px-4 py-2">
              <span>{count}</span>
            </div>
            <div className="border border-gray-300 rounded-e-lg p-2">
              <button
                onClick={() => {
                  handelUpdate({ id, count: count + 1 });
                }}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>

          <div className="text-xl font-bold">
            <p>{price} EGP</p>
          </div>
          <button
            onClick={() => {
              handelRemoveItemFromCart({ id });
            }}
          >
            <FontAwesomeIcon icon={faTrash} className="text-red-600 text-lg" />
          </button>
        </div>
      </div>
    </>
  );
}
