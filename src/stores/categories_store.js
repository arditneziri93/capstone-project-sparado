import { useCategories } from "@/src/services/categories_service";

export const useCategoryStore = () => {
  const [categories, setCategories, deleteCategoryService] = useCategories();

  async function addCategory(category) {
    setCategories((prev) => [...prev, category]);
    return true;
  }

  async function updateCategory(category) {
    setCategories((prev) =>
      prev.map((c) => (c.id === category.id ? category : c))
    );
    return true;
  }

  async function deleteCategory(id) {
    return await deleteCategoryService(id);
  }

  return {
    categories,
    setCategories,
    addCategory,
    updateCategory,
    deleteCategory,
  };
};
