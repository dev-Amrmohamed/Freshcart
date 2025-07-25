import { apiClient } from "./api-client";

export async function createOrder({ paymentMethod, cartId, shippingAddress }) {
  try {
    const option = {
      method: "POST",
      data: {
        shippingAddress,
      },
    };

    if (paymentMethod === "COD") {
      option.url = `orders/${cartId}`;
    } else if (paymentMethod === "online") {
      option.url = `orders/checkout-session/${cartId}?url=${location.origin}`;
    }

    const response = await apiClient.request(option);
    return response;
  } catch (error) {
    throw error;
  }
}
