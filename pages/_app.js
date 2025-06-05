import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/styles";
import light from "../styles/themes/light";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
