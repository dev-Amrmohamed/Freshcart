import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faShieldHalved, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import WishistItem from "../../Components/WishistItem/WishistItem";
import { WishlistContext } from "../../context/Wishlist.context";
import Loading from "../../Components/Loading/Loading";
import { CartContext } from "../../context/Cart.context";
import WishlistSkeleton from "../../Components/skeleton/WishlistSkeleton";

export default function Wishlist() {
  const [copyed, setCopyed] = useState(false);
  const { wishlistInfo, isLoading, handleClearAllFromWishlist, handleAddAllToCart } =
    useContext(WishlistContext);
  const { handelAddingProductToCart } = useContext(CartContext);
  function handleCopy() {
    navigator.clipboard.writeText("https://freshcart.com/wishlist/abc123");
    setCopyed(true);
    setTimeout(() => {
      setCopyed(false);
    }, 1000);
  }
  if (isLoading) {
    return <WishlistSkeleton />;
  }
  const { data, count } = wishlistInfo;
  const {} = data;
  console.log(data);

  return (
    <>
      <section className="bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-12 gap-8 py-10">
            {/* rght */}
            <div className="col-span-12 lg:col-span-9 border border-gray-300 rounded-xl p-5 bg-white max-h-fit">
              <div className="">
                <div>
                  <h3 className="text-2xl font-bold mb-1">My Wishlist</h3>
                </div>
                <div className="flex justify-between items-center *:font-normal">
                  <p className="text-gray-700">{count} items in your wishlist</p>
                  <div>
                    {" "}
                    <button
                      className="btn bg-transparent text-black"
                      onClick={handleClearAllFromWishlist}
                    >
                      <FontAwesomeIcon icon={faTrashCan} className="pe-2" />
                      Clear All
                    </button>
                    <button
                      className="btn bg-primary-600  text-white hover:bg-primary-700 transition-colors duration-200"
                      onClick={() => {
                        handleAddAllToCart(handelAddingProductToCart);
                      }}
                    >
                      <FontAwesomeIcon icon={faCartShopping} className="pe-2" />
                      Add All To Cart
                    </button>
                  </div>
                </div>
              </div>

              <div>
                {data.map((product) => (
                  <WishistItem key={product.id} productInfo={product} />
                ))}
              </div>
            </div>

            {/* left */}
            <div className="Order col-span-12 lg:col-span-3 space-y-6 ">
              {/* Wishlist Name */}
              <div className="border border-gray-300 rounded-xl p-5 bg-white">
                <h4 className="text-lg font-bold">Create New Wishlist</h4>{" "}
                <div className="space-y-1 *:flex *:justify-between ">
                  <label htmlFor="wishilistName" className="font-bold text-gray-700">
                    Wishlist Name
                  </label>
                  <input
                    type="text"
                    placeholder="enter wshilist name"
                    id="wishilistName"
                    className="w-full border border-gray-300 p-3 rounded-xl outline-primary-500"
                  />
                </div>
                <p className="mt-4 mb-2 font-bold  text-gray-700">Privacy</p>
                <div className=" flex space-y-3 space-x-5 ">
                  <div>
                    {" "}
                    <input type="radio" id="Public" value="Public" className="me-2" />
                    <label htmlFor="Public">Public</label>
                  </div>
                  <div>
                    {" "}
                    <input type="radio" id="Private" value="Private" className="me-2" />
                    <label htmlFor="Private">Private</label>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 *:w-full">
                  <button className="btn py-3 font-medium bg-primary-600 text-white ">
                    Create Wishilist
                  </button>
                </div>
              </div>
              {/* My Wishlists */}
              <div className="border border-gray-300 rounded-xl p-5 bg-white">
                <div>
                  <h4 className="text-lg font-bold mb-7">My Wishlists</h4>
                </div>

                <div className="item flex justify-between items-center border-b border-gray-200">
                  <div>
                    <p className="font-bold">Default Wishlist</p>
                    <span className="text-sm text-gray-700 mb-2">12 items</span>
                  </div>

                  <div className="">
                    <button className="text-primary-600">View</button>
                  </div>
                </div>
                <div className="item flex justify-between items-center border-b border-gray-200">
                  <div>
                    <p className="font-bold mt-2">Birthday Ideas</p>
                    <span className="text-sm text-gray-700 mb-2">8 items</span>
                  </div>

                  <div className="">
                    <button className="text-primary-600">View</button>
                  </div>
                </div>
                <div className="item flex justify-between items-center ">
                  <div>
                    <p className="font-bold mt-2">Weekly Groceries</p>
                    <span className="text-sm text-gray-700 mb-2">15 items</span>
                  </div>

                  <div className="">
                    <button className="text-primary-600">View</button>
                  </div>
                </div>
              </div>
              {/* Share Your */}

              <div className="border border-gray-300 rounded-xl p-5 bg-white">
                <h4 className="text-lg font-bold mb-7">Share Your Wishlist</h4>

                <div>
                  <p></p>

                  <div>
                    <button></button>
                    <button></button>
                  </div>
                </div>

                <div className="  relative">
                  <input
                    type="text"
                    value="https://freshcart.com/wishlist"
                    className="form-control w-full text-sm"
                  />
                  <button
                    className=" btn bg-gray-100 py-1 font-medium text-sm absolute top-1 right-1"
                    onClick={handleCopy}
                  >
                    {copyed ? "Copied✅" : "Copy Link"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
