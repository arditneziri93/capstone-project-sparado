export const persistTheme = (value) => {
  if (typeof window !== "undefined" && typeof value === "boolean") {
    localStorage.setItem("darkMode", JSON.stringify(value));
  }
};

export const loadTheme = () => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("darkMode");

    try {
      const parsed = JSON.parse(stored);
      return typeof parsed === "boolean" ? parsed : false;
    } catch {
      return false;
    }
  }
  return false;
};
