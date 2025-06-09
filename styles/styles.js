import { createGlobalStyle } from "styled-components";
import "./fonts";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.typography.bodyBase.fontFamily};
    background-color: ${({ theme }) => theme.surface.neutralAlt};
    color: ${({ theme }) => theme.text.neutral};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover,
  a:active {
    text-decoration: none;
    color: inherit;
  }
`;
