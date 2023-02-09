import styled, { css } from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.scienceBlue};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid rgba(209, 213, 218, 0.3);
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.05em;
  padding: 12px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 150ms ease-out, background-color 100ms linear;

  &:focus {
    outline: none;
    box-shadow: 2px -2px 0px #8cc2ff, -2px 2px 0px #8cc2ff, 2px 2px 0px #8cc2ff,
      -2px -2px 0px #8cc2ff;
  }

  &:hover {
    opacity: 0.85;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 18px;
    gap: 12px;
  }

  ${({ darkTheme }) =>
    darkTheme &&
    css`
      background-color: ${({ theme }) => theme.colors.dodgerBlue};

      &:focus {
        box-shadow: 2px -2px 0px #6d93be, -2px 2px 0px #6d93be,
          2px 2px 0px #6d93be, -2px -2px 0px #6d93be;
      }
    `}
`;
