import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::before, ::after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.colors.whiteLilac};
    padding: 0 16px;
    transition: background-color 100ms linear;

    ${({ darkTheme }) =>
      darkTheme &&
      css`
        background-color: ${({ theme }) => theme.colors.mineShaft};
      `}
  }
`;
