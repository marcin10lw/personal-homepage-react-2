import styled from "styled-components";

const staleGrey = ({ theme }) => theme.colors.staleGrey;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12.5px;
  position: absolute;
  top: 0;
  right: 0;
`;

export const ModeStatus = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.3;
  color: ${staleGrey};
`;

export const Switcher = styled.div`
  width: 48px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border: 1px solid rgba(209, 213, 218);
  border-radius: 24px;
  padding: 3px;
`;

export const SwitcherBall = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${staleGrey};
`;

export const BrightnessImage = styled.img``;
