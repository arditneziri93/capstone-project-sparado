import { useCategories } from "@/src/services/categories_service";

export const useCategoryStore = () => {
  const [categories, setCategories, deleteCategoryService] = useCategories();

  async function deleteCategory(id) {
    return await deleteCategoryService(id);
  }

  return {
    categories,
    setCategories,
    deleteCategory,
  };
};
