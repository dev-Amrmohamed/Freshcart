import { createContext, useEffect, useState } from "react";
import {
  addProductToWishlist,
  deleteItemFromWishlist,
  getProductToWishlist,
} from "../services/wishlist-services";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const WishlistContext = createContext(null);
export default function WishlistProvider({ children }) {
  const [wishlistInfo, setWishlistInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  //* Add Product To Wishlist
  async function handleAddingProductToWishlist({ id }) {
    try {
      setIsLoading(true);
      const response = await addProductToWishlist({ id });
      if (response.success) {
        setWishlistInfo(response.data.data);
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
  async function handleFetchToWishlist() {
    try {
      setIsLoading(true);
      const response = await getProductToWishlist();

      if (response.success) {
        setWishlistInfo(response.data.data);
        // console.log(response.data.data.data);

        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  }

  //! Remove Item From Cart
  async function handelRemoveItemFromWishlist({ id }) {
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
        const response = await deleteItemFromWishlist({ id });
        if (response.success) {
          toast.dismiss(toastId);
          setWishlistInfo(response.data.data);
        }
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  //^ Remove All Items from Wishlist
  function handleClearAllFromWishlist() {
    if (!wishlistInfo?.data?.products?.length) return;
    console.log(wishlistInfo.data.products.length);

    wishlistInfo.data.products.forEach((item) => {
      handelRemoveItemFromWishlist({ id: item.id });
    });
  }

  //^ Add All to Cart
  function handleAddAllToCart(addToCartFn) {
    if (!wishlistInfo?.data?.products?.length) return;

    wishlistInfo.data.products.forEach((item) => {
      addToCartFn({ id: item.id });
    });
  }

  useEffect(() => {
    handleFetchToWishlist();
  }, []);
  return (
    <>
      <WishlistContext.Provider
        value={{
          handleAddingProductToWishlist,
          isLoading,
          wishlistInfo,
          handleFetchToWishlist,
          handelRemoveItemFromWishlist,
          handleClearAllFromWishlist,
          handleAddAllToCart,
        }}
      >
        {children}
      </WishlistContext.Provider>
    </>
  );
}
