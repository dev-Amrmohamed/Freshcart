import { apiClient } from "./api-client";

export function addProductToWishlist({ id }) {
  try {
    const options = {
      url: "/wishlist",
      method: "POST",
      data: {
        productId: id,
      },
    };
    const response = apiClient.request(options);
    console.log(response);

    return response;
  } catch (error) {
    throw error;
  }
}

export async function getProductToWishlist() {
  try {
    const option = {
      url: "/wishlist",
      method: "GET",
    };
    const response = await apiClient.request(option);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function deleteItemFromWishlist({ id }) {
  try {
    const option = {
      url: `/wishlist/${id}`,
      method: "DELETE",
    };
    const response = apiClient.request(option);
    return response;
  } catch (error) {
    throw error;
  }
}
