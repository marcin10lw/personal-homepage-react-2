import styled, { css } from "styled-components";

export const ListItem = styled.li`
  font-size: 18px;
  letter-spacing: 0.05em;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 9px;
    height: 9px;
    vertical-align: middle;
    background-color: ${({ theme }) => theme.colors.scienceBlue};
    border-radius: 50%;
    margin: 0 16px 0 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      width: 6px;
      height: 6px;
    }

    ${({ darkTheme }) =>
      darkTheme &&
      css`
        background-color: ${({ theme }) => theme.colors.dodgerBlue};
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;
