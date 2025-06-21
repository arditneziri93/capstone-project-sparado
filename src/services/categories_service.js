import defaultCategories from "@/assets/data/categories.json";
import useLocalStorageState from "use-local-storage-state";

export function useCategories() {
  const [categories, setCategories] = useLocalStorageState("categories", {
    defaultValue: defaultCategories,
  });

  async function addCategoryService(category) {
    let added = false;
    setCategories((prev) => {
      const exists = prev.some((c) => c.id === category.id);
      if (!exists) {
        added = true;
        return [...prev, category];
      }
      return prev;
    });
    return added;
  }

  async function updateCategoryService(category) {
    let updated = false;
    setCategories((prev) => {
      const result = prev.map((c) => {
        if (c.id === category.id) {
          updated = true;
          return category;
        }
        return c;
      });
      return result;
    });
    return updated;
  }

  async function deleteCategoryService(id) {
    let deleted = false;
    setCategories((prev) => {
      const updated = prev.filter((c) => c.id !== id);
      deleted = updated.length !== prev.length;
      return updated;
    });
    return deleted;
  }

  return [
    categories,
    setCategories,
    addCategoryService,
    updateCategoryService,
    deleteCategoryService,
  ];
}
