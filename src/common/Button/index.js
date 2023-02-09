import styled, { css } from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.scienceBlue};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.05em;
  padding: 12px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 150ms ease-out, background-color 100ms linear;

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
    `}
`;
