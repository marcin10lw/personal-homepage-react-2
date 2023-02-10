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
    color: ${({ theme }) => theme.colors.staleGrey};
    padding: 0 16px;

    ${({ darkTheme }) =>
      darkTheme &&
      css`
        background-color: ${({ theme }) => theme.colors.mineShaft};
        color: ${({ theme }) => theme.colors.white};
      `}
  }
`;
