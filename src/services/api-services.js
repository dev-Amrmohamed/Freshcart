import { apiClient } from "./api-client";

export async function sendDataToSignUp(values) {
  try {
    const response = await apiClient.post("/auth/signup", {
      name: values.name,
      email: values.email,
      phone: values.phone,
      password: values.password,
      rePassword: values.rePassword,
    });
    return response.data;
  } catch (error) {
    console.error("Signup Error:", error.response?.data || error.message);
    throw error;
  }
}

export async function sendDataToLogIn(values) {
  try {
    const option = {
      url: `/auth/signin`,
      method: "POST",
      data: {
        email: values.email,
        password: values.password,
      },
    };
    const response = await apiClient.request(option);
    console.log(response);

    return response;
  } catch (error) {
    throw error;
  }
}
