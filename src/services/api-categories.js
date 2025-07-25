import { apiClient } from "./api-client";
export async function getCateDeatiels() {
  try {
    const option = {
      url: `/categories`,
      method: "GET",
    };
    const response = await apiClient.request(option);
    return response;
  } catch (error) {
    throw error;
  }
}
