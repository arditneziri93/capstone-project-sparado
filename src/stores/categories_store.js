import { useState, useEffect } from "react";
import {
  loadCategories,
  persistCategories,
} from "@/src/services/categories_service";

export const useCategoryStore = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const initial = loadCategories();
    setCategories(initial);
  }, []);

  const updateCategories = (newCategories) => {
    setCategories(newCategories);
    persistCategories(newCategories);
  };

  return {
    categories,
    setCategories: updateCategories,
  };
};
