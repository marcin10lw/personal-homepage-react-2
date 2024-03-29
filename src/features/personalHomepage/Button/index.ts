import styled, { css } from "styled-components";
import { transitionDelay, transitionTime } from "../transition";
import { lightTheme } from "../../../core/App/theme";

const buttonHover = ({ theme }: { theme: typeof lightTheme }) =>
  theme.colors.buttonHover;

type ButtonProps = {
  inError?: boolean;
};

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid rgba(209, 213, 218, 0.3);
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.05em;
  padding: 12px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: color ${transitionTime} ease-in-out,
    box-shadow ${transitionTime} ease-out,
    background-color ${transitionTime} ease-in-out;
  transition-delay: ${transitionDelay};

  &:hover {
    box-shadow: 2px -2px 0px ${buttonHover}, -2px 2px 0px ${buttonHover},
      2px 2px 0px ${buttonHover}, -2px -2px 0px ${buttonHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin: 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 18px;
    gap: 12px;
    margin: 0 auto 0 0;
  }

  ${({ inError }) =>
    inError &&
    css`
      display: inline-block;
      text-decoration: none;
    `}
`;
