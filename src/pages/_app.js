import GlobalStyle from "@/src/styles/styles";
import light from "@/src/styles/themes/light";
import dark from "@/src/styles/themes/dark";
import AppLayout from "@/src/components/layout/app_layout";
import { ThemeProvider } from "styled-components";
import { useThemeStore } from "@/src/stores/theme_store";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const { isDarkMode, initTheme } = useThemeStore();

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  return (
    <ThemeProvider theme={isDarkMode ? dark : light}>
      <AppLayout>
        <GlobalStyle />
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
}
