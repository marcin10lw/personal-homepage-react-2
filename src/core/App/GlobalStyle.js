import { createGlobalStyle, css } from "styled-components";
import {
  transitionDelay,
  transitionTime,
} from "../../features/personalHomepage/transition";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::before, ::after {
    box-sizing: inherit;
  }

  html::-webkit-scrollbar {
    width: 0.5vw;
  }
  
  html::-webkit-scrollbar-thumb {
    background-color: #25252580;
    border-radius: 6px;
    
    &:hover {
      background-color: #252525bd;
    }    
  }
  
  html::-webkit-scrollbar-track {
    background-color: #cfcfcf;
    margin-block: 0.3em;
    border-radius: 6px;
    
    ${({ isDarkTheme }) =>
      isDarkTheme &&
      css`
        background-color: #8a8a8a;
      `}
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.colors.bodyBackground};
    color: ${({ theme }) => theme.colors.globalColor};
    padding: 0 16px;
    transition: background-color ${transitionTime} ease-in-out, color ${transitionTime} ease-in-out;
    transition-delay: ${transitionDelay};
    overflow-x: hidden;
  }
`;
