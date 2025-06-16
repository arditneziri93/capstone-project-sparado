import { useCategories } from "@/src/services/categories_service";

export const useCategoryStore = () => {
  const [categories, setCategories] = useCategories();

  return {
    categories,
    setCategories,
  };
};
