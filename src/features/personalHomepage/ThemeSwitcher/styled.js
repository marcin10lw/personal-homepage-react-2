import styled, { css } from "styled-components";
import { ReactComponent as BrightnessIcon } from "./images/brightness-icon.svg";

const staleGrey = ({ theme }) => theme.colors.staleGrey;
const white = ({ theme }) => theme.colors.white;

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
  color: ${staleGrey};

  ${({ darkMode }) =>
    darkMode &&
    css`
      color: ${white};
    `}
`;

export const Switcher = styled.div`
  width: 48px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border: 1px solid rgba(209, 213, 218);
  border-radius: 24px;
  padding: 3px;
  cursor: pointer;
  transition: all 180ms ease-in-out;

  ${({ darkMode }) =>
    darkMode &&
    css`
      background-color: #6d6d6d;
      border-color: #fefefe;
    `}
`;

export const SwitcherBall = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${staleGrey};
  transition: all 180ms ease-in-out;

  ${({ darkMode }) =>
    darkMode &&
    css`
      background-color: ${white};
      transform: translateX(20px);
    `}
`;

export const Brightness = styled(BrightnessIcon)`
  color: ${white};
  transition: all 180ms ease-in-out;

  ${({ darkMode }) =>
    darkMode &&
    css`
      color: black;
    `}
`;
