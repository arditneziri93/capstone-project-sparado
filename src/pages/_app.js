import GlobalStyle from "@/src/styles/styles";
import light from "@/src/styles/themes/light";
import dark from "@/src/styles/themes/dark";
import AppLayout from "@/src/components/layout/app_layout";
import { ThemeProvider } from "styled-components";
import { useThemeStore } from "@/src/stores/theme_store";
import { ModalProvider } from "@oktapod/modal";
import ModalDefList from "../components/modals/modal_daf_list";

export default function App({ Component, pageProps }) {
  const { isDarkMode } = useThemeStore();
  return (
    <ThemeProvider theme={isDarkMode ? dark : light}>
      <ModalProvider>
        <ModalDefList />
        <AppLayout>
          <GlobalStyle />
          <Component {...pageProps} />
        </AppLayout>
      </ModalProvider>
    </ThemeProvider>
  );
}
