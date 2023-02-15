import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::before, ::after {
    box-sizing: inherit;
  }

  html::-webkit-scrollbar {
    width: 0.7vw;
  }
  
  html::-webkit-scrollbar-thumb {
    background-color: #25252580;
    border-radius: 4px;
    
    &:hover {
      background-color: #252525bd;
    }    
  }
  
  html::-webkit-scrollbar-track {
    background-color: #cfcfcf;
    margin-block: 0.3em;
    border-radius: 4px;
    
    ${({ darkTheme }) =>
      darkTheme &&
      css`
        background-color: #8a8a8a;
      `}
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
