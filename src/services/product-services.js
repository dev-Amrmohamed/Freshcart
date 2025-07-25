import { apiClient } from "./api-client";

// export async function getAllProducts({
//   page,
//   keyword,
//   priceGreaterThan,
//   priceLessThan,
//   sortedBy,
//   category,
//   brand,
// } = {}) {
//   try {
//     const option = {
//       url: `/products?${page ? `page=${page}` : ""}
//       ${keyword ? `&keyword=${keyword}` : ""}
//       ${priceGreaterThan ? `&price[gte] =${priceGreaterThan}` : ``}
//       ${priceLessThan ? `&price[lte] =${priceLessThan}` : ``}
//       ${sortedBy ? `&sort = ${sortedBy}` : ``}
//       ${category ? `&category[in]=${category}` : ""}
//         ${brand ? `&brand =${brand}` : ``}
//         `,
//       method: "GET",
//     };
//     const response = await apiClient.request(option);
//     console.log(response);

//     return response;
//   } catch (error) {
//     throw error;
//   }
// }

export async function getAllProducts({
  page,
  keyword,
  priceGreaterThan,
  priceLessThan,
  sortedBy,
  category,
  brand,
} = {}) {
  try {
    const query = new URLSearchParams();

    if (page) query.append("page", page);
    if (keyword) query.append("keyword", keyword);
    if (priceGreaterThan) query.append("price[gte]", priceGreaterThan);
    if (priceLessThan) query.append("price[lte]", priceLessThan);
    if (sortedBy) query.append("sort", sortedBy);
    if (category) query.append("category[in]", category);
    if (brand) query.append("brand", brand);

    const option = {
      url: `/products?${query.toString()}`,
      method: "GET",
    };

    const response = await apiClient.request(option);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getProductById({ id }) {
  try {
    const option = {
      url: `/products/${id}`,
      method: "GET",
    };
    const response = await apiClient.request(option);
    return response;
  } catch (error) {
    throw error;
  }
}
