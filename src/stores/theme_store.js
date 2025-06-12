import { create } from "zustand";
import { persistTheme, loadTheme } from "@/src/services/theme_service";

export const useThemeStore = create((set) => ({
  isDarkMode: false,

  initTheme: () => {
    const stored = loadTheme();
    set({ isDarkMode: stored });
  },

  setDarkMode: (value) => {
    persistTheme(value);
    set({ isDarkMode: value });
  },
}));
