import styled, { css } from "styled-components";

const bpMobile = ({ theme }) => theme.breakpoints.mobile;
const white = ({ theme }) => theme.colors.white;

export const StyledSection = styled.section`
  margin: 72px 0 0 0;
  padding: 32px;
  background-color: ${white};
  border-radius: 4px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);

  &:nth-child(2) {
    h2 {
      border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
    }
  }

  @media (max-width: ${bpMobile}px) {
    margin: 48px 0 0 0;
    padding: 16px;
  }

  ${({ isDarkTheme }) =>
    isDarkTheme &&
    css`
      background-color: rgba(54, 54, 54, 0.72);
    `}
`;

export const SectionHeader = styled.h2`
  font-size: 30px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.mineShaft};
  letter-spacing: 0.05em;
  padding: 0 0 13px;
  margin: 0;
  border-bottom: 1px solid rgba(209, 213, 218, 0.3);

  @media (max-width: ${bpMobile}px) {
    font-size: 18px;
    padding: 0 0 12px;
  }

  ${({ isDarkTheme }) =>
    isDarkTheme &&
    css`
      color: ${white};
      border-bottom: 1px solid rgba(209, 213, 218, 0.1);
    `}
`;

export const SectionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 32px 0 0 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(313px, 1fr));
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  @media (max-width: ${bpMobile}px) {
    margin: 25px 0 0 0;
  }
`;
