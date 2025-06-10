import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/styles";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import AppLayout from "../components/layout/app_layout";

export default function App({ Component, pageProps }) {
  const darkModeEnabled = false;
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
