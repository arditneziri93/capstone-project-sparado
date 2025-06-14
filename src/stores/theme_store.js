import { useTheme } from "@/src/services/theme_service";

export const useThemeStore = () => {
  const [isDarkMode, setDarkMode] = useTheme();

  return {
    isDarkMode,
    setDarkMode,
  };
};
