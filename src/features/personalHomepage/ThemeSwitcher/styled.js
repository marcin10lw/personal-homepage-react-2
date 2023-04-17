import styled, { css } from "styled-components";
import { ReactComponent as BrightnessIcon } from "./images/brightness-icon.svg";
import { transitionDelay, transitionTime } from "../transition";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12.5px;
  position: absolute;
  top: 0;
  right: 0;
`;

export const ThemeStatus = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.globalColor};
  transition: color ${transitionTime} ease-in-out;
  transition-delay: ${transitionDelay};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: none;
  }
`;

export const Switcher = styled.button`
  width: 48px;
  background-color: ${({ theme }) => theme.colors.grey};
  border: 1px solid ${({ theme }) => theme.colors.switchBorder};
  border-radius: 24px;
  padding: 3px;
  cursor: pointer;
  transition: background-color ${transitionTime} ease-in-out, border ${transitionTime} ease-in-out;
  transition-delay: ${transitionDelay};
`;

export const SwitcherBall = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.globalColor};
  transition: color ${transitionTime} ease-in-out, transform 1${transitionDelay} ease-in-out,
    background-color ${transitionTime} ease-in-out;
  transition-delay: ${transitionDelay};

  ${({ isDarkTheme }) =>
    isDarkTheme &&
    css`
      transform: translateX(20px);
    `}
`;

export const Brightness = styled(BrightnessIcon)`
  color: ${({ theme }) => theme.colors.switcherColor};
  transition: color ${transitionTime} ease-in-out;
  transition-delay: ${transitionDelay};
`;
