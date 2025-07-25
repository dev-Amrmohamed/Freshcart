import { createContext, useEffect, useState } from "react";
import { getCateDeatiels } from "../services/api-categories";

export const categoriesContext = createContext(null);

export default function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchCategories() {
    try {
      setIsLoading(true);
      const response = await getCateDeatiels();
      if (response.success) {
        setIsLoading(false);
        setCategories(response.data.data.data);
      }
    } catch (error) {
      setIsLoading(true);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <categoriesContext.Provider value={{ categories, isLoading }}>
      {children}
    </categoriesContext.Provider>
  );
}
