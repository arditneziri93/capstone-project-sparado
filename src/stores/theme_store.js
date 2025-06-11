import { create } from "zustand";
import { getTheme, saveTheme } from "@/services/themeService";

const useThemeStore = create((set, get) => ({
  isDarkMode: getTheme(),

  toggleTheme: async () => {
    const current = get().isDarkMode;
    const next = !current;
    set({ isDarkMode: next });
    await saveTheme(next); // delegiert an Service
  },
}));

export default useThemeStore;
