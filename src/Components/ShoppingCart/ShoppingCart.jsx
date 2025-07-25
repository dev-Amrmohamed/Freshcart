import React, { useContext, useState } from "react";
import Ratings from "../Ratings/Ratings";
import {
  faMinus,
  faPlus,
  faShieldHalved,
  faShoppingCart,
  faTrash,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartItem from "../CartItem/CartItem";
import Loading from "../Loading/Loading";
import { CartContext } from "../../context/Cart.context";
import { Link, Links } from "react-router";
import CartSkeleton from "../skeleton/CartSkeleton";

export default function ShoppingCart() {
  const { cartInfo, isLoading } = useContext(CartContext);

  if (isLoading) {
    return <CartSkeleton />;
  }
  const { numOfCartItems, data } = cartInfo;
  const { products, totalCartPrice } = data;

  return (
    <>
      <section className="mt-10 bg-gray-100">
        <div className="container">
          <div className="grid grid-cols-12 gap-8 py-10">
            {/* rght */}
            <div className="col-span-12 lg:col-span-8 border border-gray-300 rounded-xl p-5 bg-white max-h-fit">
              <h3 className="text-2xl font-bold mb-1">Shopping Cart</h3>
              <p className="text-gray-700">{numOfCartItems} items in your cart</p>
              {products.length > 0 ? (
                products.map((product) => <CartItem key={product.id} productInfo={product} />)
              ) : (
                <div className="*:text-center py-10 space-y-3">
                  <p>
                    Your Cart is Empty Now{" "}
                    <FontAwesomeIcon icon={faShoppingCart} className="ms-2 text-primary-600" />
                  </p>

                  <p>
                    You can continue shopping from{" "}
                    <Link className="text-primary-500" to={"/"}>
                      here
                    </Link>{" "}
                  </p>
                </div>
              )}
            </div>

            {/* left */}
            <div className="Order col-span-12 lg:col-span-4 border border-gray-300 rounded-xl p-7 bg-white space-y-6 max-h-fit">
              <h4 className="text-xl font-bold">Order Summary</h4>
              <div className="space-y-3 *:flex *:justify-between *:text-gray-600 *:font-medium  border-b border-gray-200 pb-5">
                <div className="flex justify-between">
                  <p>Subtotal ({numOfCartItems} items)</p>
                  <p className="font-bold text-black">{totalCartPrice} EGP</p>
                </div>
                <div>
                  {" "}
                  <p>Shipping</p>
                  <p className="font-bold text-primary-500">
                    {products.length > 0
                      ? totalCartPrice > 1000
                        ? "Free"
                        : 70 + " " + "EGP"
                      : 0 + " " + "EGP"}
                  </p>
                </div>

                <div className="">
                  {" "}
                  <p>Tax</p>
                  <p className="font-bold text-black">{Math.trunc(totalCartPrice * 0.14)} EGP</p>
                </div>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <h5>Total</h5>
                <p>{Math.trunc(totalCartPrice + totalCartPrice * 0.14)} EGP</p>
              </div>

              <div className="flex flex-col space-y-2 *:w-full">
                <Link to={"/cheackout"} className="btn py-4 text-center bg-primary-600 text-white">
                  Proceed to Checkout
                </Link>

                <button className="btn py-4 bg-transparent border border-gray-300">
                  Continue Shopping
                </button>
              </div>

              <div className="icons-info space-y-4">
                <div className="bg-gray-100 rounded-lg p-5 space-y-2">
                  <div className="flex  items-center gap-3">
                    <FontAwesomeIcon icon={faTruck} className="text-primary-600 text-xl" />
                    <p className="font-bold text-lg">Free Delivery</p>
                  </div>
                  <div>
                    <p className="text-gray-600">
                      Your order qualifies for free delivery. Estimated delivery: 2-3 business days
                    </p>
                  </div>
                </div>
                <div className="bg-primary-100 rounded-lg p-5 border border-primary-500 space-y-2">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <FontAwesomeIcon icon={faShieldHalved} className="text-primary-600 text-xl" />
                      <p className="font-bold text-lg">Secure Checkout</p>
                    </div>
                    <div>
                      <p className="text-gray-600">
                        Your payment information is protected with 256-bit SSL encryption
                      </p>
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
