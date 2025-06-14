import defaultCategories from "@/assets/data/categories.json";
import useLocalStorageState from "use-local-storage-state";

export function useCategories() {
  const [categories, setCategories] = useLocalStorageState("categories", {
    defaultValue: defaultCategories,
  });

  return [categories, setCategories];
}
