import { apiClient } from "./api-client";

export function addProductToCart({ id }) {
  try {
    const options = {
      url: "/cart",
      method: "POST",
      data: {
        productId: id,
      },
    };
    const response = apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getProductToCart() {
  try {
    const option = {
      url: "/cart",
      method: "GET",
    };
    const response = await apiClient.request(option);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function deleteItemFromCart({ id }) {
  try {
    const option = {
      url: `/cart/${id}`,
      method: "DELETE",
    };
    const response = apiClient.request(option);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function updateProductQuantity({ id, count }) {
  try {
    const option = {
      url: `/cart/${id}`,
      method: "PUT",
      data: {
        count,
      },
    };
    const response = await apiClient.request(option);
    return response;
  } catch (error) {
    throw error;
  }
}
