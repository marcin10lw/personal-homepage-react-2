import styled, { css } from "styled-components";

const anakiwa = ({ theme }) => theme.colors.anakiwa;
const shipCove = ({ theme }) => theme.colors.shipCove;

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
  transition: box-shadow 150ms ease-out;

  &:hover {
    box-shadow: 2px -2px 0px ${anakiwa}, -2px 2px 0px ${anakiwa},
      2px 2px 0px ${anakiwa}, -2px -2px 0px ${anakiwa};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 18px;
    gap: 12px;
  }

  ${({ isDarkTheme }) =>
    isDarkTheme &&
    css`
      background-color: ${({ theme }) => theme.colors.dodgerBlue};

      &:hover {
        box-shadow: 2px -2px 0px ${shipCove}, -2px 2px 0px ${shipCove},
          2px 2px 0px ${shipCove}, -2px -2px 0px ${shipCove};
      }
    `}

  ${({ inError }) =>
    inError &&
    css`
      display: inline-block;
      text-decoration: none;
    `}
`;
