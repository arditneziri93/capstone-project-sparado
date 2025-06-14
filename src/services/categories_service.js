import defaultCategories from "@/assets/data/categories.json";

const STORAGE_KEY = "categories";

export const persistCategories = (value) => {
  if (typeof window !== "undefined" && Array.isArray(value)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  }
};

export const loadCategories = () => {
  if (typeof window === "undefined") return [];

  const stored = localStorage.getItem(STORAGE_KEY);

  const parsed = JSON.parse(stored);
  if (Array.isArray(parsed)) return parsed;

  persistCategories(defaultCategories);
  return defaultCategories;
};
