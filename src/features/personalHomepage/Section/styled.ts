import styled from "styled-components";
import { transitionDelay, transitionTime } from "../transition";

export const StyledSection = styled.section`
  margin: 72px 0 0 0;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.sectionBackground};
  border-radius: 4px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  transition: background-color ${transitionTime} ease-in-out;
  transition-delay: ${transitionDelay};

  &:nth-child(2) {
    h2 {
      border-bottom: 1px solid #e5e5e5;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: 48px 0 0 0;
    padding: 16px;
  }
`;

export const SectionHeader = styled.h2`
  font-size: 30px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.globalColorSecond};
  letter-spacing: 0.05em;
  padding: 0 0 13px;
  margin: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.sectionBorder};
  transition: color ${transitionTime} ease-in-out,
    border-bottom ${transitionTime} ease-in-out;
  transition-delay: ${transitionDelay};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 18px;
    padding: 0 0 12px;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: 25px 0 0 0;
  }
`;
