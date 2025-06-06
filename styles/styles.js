import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: system-ui;
    background-color: ${({ theme }) => theme.surface.neutralAlt};
    color: ${({ theme }) => theme.text.neutral};
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  a:hover{
    text-decoration: none;
    color: inherit;
  }


  a:active{
    text-decoration: none;
    color: inherit;
  }
`;
