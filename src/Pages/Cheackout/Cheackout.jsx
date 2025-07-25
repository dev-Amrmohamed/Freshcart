import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRightLong,
  faChevronLeft,
  faCircleInfo,
  faLock,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { useContext } from "react";
import { Link, Links, useNavigate } from "react-router";
import * as yup from "yup";
import { CartContext } from "../../context/Cart.context";
import Loading from "./../../Components/Loading/Loading";
import { createOrder } from "../../services/payment-services";
import { toast } from "react-toastify";
import CheackoutSkeleton from "../../Components/skeleton/CheackoutSkeleton";

export default function Cheackout() {
  const { cartInfo, isLoading, setCartInfo } = useContext(CartContext);
  const navigate = useNavigate();
  const validationSchema = yup.object({
    paymentMethod: yup.string().required("Payment method is require"),
    shippingAddress: yup.object({
      details: yup.string().required("Address is required"),
      phone: yup
        .string()
        .required("Phone Is Required")
        .matches(/^(\+2)?01[0125][0-9]{8}$/, "Phone Number Is Invalid"),
      city: yup.string().required("city is required"),
    }),
  });

  async function handleCreatingOrder(values) {
    try {
      const response = await createOrder({
        cartId,
        shippingAddress: values.shippingAddress,
        paymentMethod: values.paymentMethod,
      });
      if (response.success) {
        if (response.data.data.session) {
          toast.loading("you will be directed to stripe to complete payment proccess");
          setTimeout(() => {
            location.href = response.data.data.session.url;
          }, 3000);
        }

        toast.success("Successful order");
        setCartInfo({
          numOfCartItems: 0,
          data: {
            products: [],
            totalCartPrice: 0,
          },
        });

        setTimeout(() => {
          navigate("/orders");
        }, 3000);
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const formik = useFormik({
    initialValues: {
      paymentMethod: "online",
      shippingAddress: {
        details: "",
        phone: "",
        city: "",
      },
    },
    validationSchema,
    onSubmit: handleCreatingOrder,
  });

  function handelPaymentChange(e) {
    formik.setFieldValue("paymentMethod", e.target.value);
  }

  if (isLoading) {
    return <CheackoutSkeleton />;
  }
  const { numOfCartItems, cartId, data } = cartInfo;
  const { products, totalCartPrice } = data;

  return (
    <>
      <section>
        <div className="container max-w-6xl py-6">
          <form onSubmit={formik.handleSubmit}>
            <h1 className="text-2xl  font-semibold mb-6">Cheackout</h1>
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="Payment-method lg:col-span-8">
                <div className="payment-options bg-white shadow-sm rounded-lg mb-6 p-6">
                  {" "}
                  <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
                  <div className="">
                    <label
                      htmlFor="cod"
                      className={` ${
                        formik.values.paymentMethod === "COD" && "bg-primary-50 border-primary-500"
                      } flex gap-4  items-center border border-gray-200 p-4 rounded-lg hover:border-primary-600 transition-colors duration-200`}
                    >
                      <input
                        type="radio"
                        name="payment-method"
                        value={`COD`}
                        id="cod"
                        className="size-4"
                        onChange={(e) => {
                          handelPaymentChange(e);
                        }}
                        checked={formik.values.paymentMethod === "COD"}
                      />
                      <div className="w-full">
                        <div className="w-full flex justify-between items-center">
                          <div className="flex items-center gap-4">
                            <FontAwesomeIcon
                              icon={faMoneyBillWave}
                              className="text-2xl text-primary-600"
                            />
                            <div>
                              <h3 className="font-bold">Cash On Delivery</h3>
                              <p className="text-gray-600 text-sm">Pay when your order arrives</p>
                            </div>
                          </div>
                          <span className="text-primary-600">No extra charges</span>
                        </div>

                        {formik.values.paymentMethod === "COD" && (
                          <div className="mt-3 ml-10 flex gap-2 p-1 items-center border border-primary-600/50 bg-primary-100 text-primary-600  rounded-md">
                            <FontAwesomeIcon icon={faCircleInfo} className="text-primary-600 p-2" />
                            <p className="text-sm">
                              Please keep exact change ready for hassle-free delivery
                            </p>
                          </div>
                        )}
                      </div>
                    </label>

                    <label
                      htmlFor="online"
                      className={` ${
                        formik.values.paymentMethod === "online" &&
                        "bg-primary-50 border-primary-500"
                      } flex gap-4 mt-3 items-center border border-gray-200 p-4 rounded-lg hover:border-primary-600 transition-colors duration-200`}
                    >
                      <input
                        type="radio"
                        name="payment-method"
                        value={`online`}
                        onChange={(e) => {
                          handelPaymentChange(e);
                        }}
                        id="cod"
                        className="size-4"
                        checked={formik.values.paymentMethod === "online"}
                      />
                      <div className="w-full">
                        <div className="w-full flex justify-between items-center">
                          <div className="flex items-center gap-4">
                            <FontAwesomeIcon
                              icon={faMoneyBillWave}
                              className="text-2xl text-primary-600"
                            />
                            <div>
                              <h3 className="font-bold">Online Payment</h3>
                              <p className="text-gray-600 text-sm">
                                Pay securely with card or digital wallet
                              </p>
                            </div>
                          </div>
                          <span className="text-primary-600">Recommended</span>
                        </div>

                        {formik.values.paymentMethod === "online" && (
                          <div className="mt-3 ml-10 flex gap-2 items-center border border-blue-600/50 bg-blue-100 p-1 text-blue-600  rounded-md">
                            <FontAwesomeIcon icon={faCircleInfo} className=" p-2" />
                            <p className="text-sm">
                              You will be redirected to secure payment gateway to complete your
                              transaction
                            </p>
                          </div>
                        )}
                      </div>
                    </label>
                  </div>
                </div>

                <div className="shipping-address bg-white shadow-sm rounded-lg p-5">
                  <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                  <div className="address flex flex-col gap-2">
                    <label htmlFor="addressDetails" className="text-sm">
                      Address Details *
                    </label>
                    <textarea
                      placeholder="Enter Your Address Detailes"
                      className="form-control min-h-20 max-h-60"
                      id="addressDetails"
                      name="shippingAddress.details"
                      onChange={formik.handleChange}
                      value={formik.values.shippingAddress.details}
                      onBlur={formik.handleBlur}
                    ></textarea>
                    {formik.errors.shippingAddress?.details &&
                      formik.touched.shippingAddress?.details && (
                        <p className="text-red-500 text-sm">
                          * {formik.errors.shippingAddress?.details}
                        </p>
                      )}
                  </div>

                  <div className="mt-3  flex gap-3 *:grow-1">
                    <div className="phone flex flex-col gap-2">
                      <label htmlFor="phone" className="text-sm">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="01026410277"
                        className="form-control"
                        name="shippingAddress.phone"
                        onChange={formik.handleChange}
                        value={formik.values.shippingAddress.phone}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.shippingAddress?.phone &&
                        formik.touched.shippingAddress?.phone && (
                          <p className="text-red-500 text-sm">
                            * {formik.errors.shippingAddress?.phone}
                          </p>
                        )}
                    </div>
                    <div className="city flex flex-col gap-2">
                      <label htmlFor="city" className="text-sm">
                        City*
                      </label>
                      <input
                        type="text"
                        id="city"
                        placeholder="cairo"
                        className="form-control"
                        name="shippingAddress.city"
                        onChange={formik.handleChange}
                        value={formik.values.shippingAddress.city}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.shippingAddress?.city &&
                        formik.touched.shippingAddress?.city && (
                          <p className="text-red-500 text-sm">
                            * {formik.errors.shippingAddress?.city}
                          </p>
                        )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-summary h-fit bg-white shadow-sm rounded-lg lg:col-span-4 p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="cart-items border-b max-h-48 overflow-auto space-y-3 border-gray-500/20 pb-3">
                  {products.map((product) => (
                    <Link
                      to={`/products/${product.product.id}`}
                      key={product._id}
                      className="item flex gap-2 items-center"
                    >
                      <img
                        src={product.product.imageCover}
                        alt=""
                        className="size-12 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="text-sm">{product.product.title}</h3>
                        <span className="text-gray-500 text-xs">Qty: {product.count}</span>
                      </div>
                      <span className="ms-auto text-sm">{product.price} EGP</span>
                    </Link>
                  ))}
                  <div className="item flex gap-2 items-center">
                    <img
                      src="https://tse3.mm.bing.net/th/id/OIP.i4YH9hPP_yM3nXMIQDDkQwHaLL?rs=1&pid=ImgDetMain&o=7&rm=3"
                      alt=""
                      className="size-12 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="text-sm">Logo T-Shirt</h3>
                      <span className="text-gray-500 text-xs">Qty: 1</span>
                    </div>
                    <span className="ms-auto text-sm">150 EGP</span>
                  </div>
                </div>

                <ul className="py-3 space-y-3 *:flex *:justify-between *:items-center">
                  <li>
                    <span>Subtotal</span>
                    <span>{totalCartPrice} EGP</span>
                  </li>
                  <li>
                    <span>Delivery</span>
                    <span>70 EGP</span>
                  </li>
                  <li>
                    <span>Tax</span>
                    <span>{Math.trunc(totalCartPrice * 0.14)} EGP</span>
                  </li>
                  <li className="font-semibold border-t border-gray-500/20 pt-3">
                    <span>Total</span>
                    <span>
                      {Math.trunc(totalCartPrice + 70 + Math.trunc(totalCartPrice * 0.14))} EGP
                    </span>
                  </li>
                </ul>

                <div className="btn-groub space-y-2">
                  <button
                    type="submit"
                    className="btn bg-primary-600 text-white flex gap-2 items-center justify-center w-full  "
                  >
                    <span>Proceed to payment</span>
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </button>
                  <Link
                    to={`/cart`}
                    className="btn bg-white border border-gray-500/20 flex gap-2 items-center justify-center w-full "
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <span>Previous Step</span>
                  </Link>
                </div>

                <div className="space-y-2">
                  <h3 className="mt-3">Secure Checkout</h3>
                  <p className="flex text-sm gap-2">
                    <FontAwesomeIcon className="text-primary-600" icon={faLock} />
                    Your payment information is secure
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
