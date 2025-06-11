import GlobalStyle from "@/src/styles/styles";
import light from "@/src/styles/themes/light";
import dark from "@/src/styles/themes/dark";
import AppLayout from "@/src/components/layout/app_layout";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }) {
  const darkModeEnabled = true;
  console.log("Theme loaded:", dark);
  return (
    <>
      <ThemeProvider theme={darkModeEnabled ? dark : light}>
        <AppLayout>
          <GlobalStyle />
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </>
  );
}
