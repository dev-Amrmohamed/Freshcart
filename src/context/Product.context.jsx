import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../services/product-services";

export const productContext = createContext(null);

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  async function fetchProducts() {
    try {
      setIsLoading(true);
      const response = await getAllProducts();
      setIsLoading(false);
      setProducts(response.data.data.data);
    } catch (error) {
      setIsLoading(true);
      setIsError(true);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <productContext.Provider value={{ isLoading, products, isError }}>
      {children}
    </productContext.Provider>
  );
}
