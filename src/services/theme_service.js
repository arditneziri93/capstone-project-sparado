import useLocalStorageState from "use-local-storage-state";

export function useTheme() {
  const [isDarkMode, setDarkMode] = useLocalStorageState("darkMode", {
    defaultValue: true,
  });

  return [isDarkMode, setDarkMode];
}
