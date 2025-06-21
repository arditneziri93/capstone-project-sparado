import defaultCategories from "@/assets/data/categories.json";
import useLocalStorageState from "use-local-storage-state";

export function useCategories() {
  const [categories, setCategories] = useLocalStorageState("categories", {
    defaultValue: defaultCategories,
  });

  async function deleteCategoryService(id) {
    let wasDeleted = false;
    setCategories((prev) => {
      const updated = prev.filter((c) => c.id !== id);
      wasDeleted = updated.length !== prev.length;
      return updated;
    });
    return wasDeleted;
  }

  return [categories, setCategories, deleteCategoryService];
}
