import { createContext, useEffect, useState } from "react";
import {
  addProductToCart,
  deleteItemFromCart,
  getProductToCart,
  updateProductQuantity,
} from "../services/cart-services";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
export const CartContext = createContext(null);
export default function CartProvider({ children }) {
  const [cartInfo, setCartInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  //* Add Product To Cart
  async function handelAddingProductToCart({ id }) {
    try {
      setIsLoading(true);
      const response = await addProductToCart({ id });
      console.log(response);

      if (response.success) {
        setCartInfo(response.data.data);
        toast.success(response.data.data.message);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);

      setIsError(true);
      setIsLoading(false);
    }
  }

  //^ Get Cart Products
  async function handleFetchCartItem() {
    try {
      setIsLoading(true);
      const response = await getProductToCart();
      // console.log(response);
      if (response.success) {
        setCartInfo(response.data.data);
        // console.log(response.data.data.data);

        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  }

  //! Remove Item From Cart
  async function handelRemoveItemFromCart({ id }) {
    try {
      const res = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        iconColor: "#d33",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#333446",
        confirmButtonText: "Yes, delete it!",
      });
      // console.log(res);
      if (res.isConfirmed) {
        const toastId = toast.loading("Deleting is under operation");
        const response = await deleteItemFromCart({ id });
        if (response.success) {
          toast.dismiss(toastId);
          setCartInfo(response.data.data);
        }
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  //& Update Product Quantity
  async function handleUpdateQuantity({ id, count }) {
    try {
      const toastId = toast.loading("Updating Under Execution");
      const response = await updateProductQuantity({ id, count });
      if (response.success) {
        toast.dismiss(toastId);
        setCartInfo(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleFetchCartItem();
  }, []);

  // console.log(cartInfo);

  return (
    <CartContext.Provider
      value={{
        handelAddingProductToCart,
        cartInfo,
        isError,
        isLoading,
        handelRemoveItemFromCart,
        handleUpdateQuantity,
        refreshCart: handleFetchCartItem,
        setCartInfo,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
