import styled from "styled-components";
import { ReactComponent as GithubIcon } from "./images/github-icon.svg";
import { transitionDelay, transitionTime } from "../transition";

export const StyledPortfolio = styled.section`
  margin: 72px 0 0;
`;

export const PortfolioWrapper = styled.div`
  color: ${({ theme }) => theme.colors.globalColorSecond};
  text-align: center;
  transition: color ${transitionTime} ease-in-out;
  transition-delay: ${transitionDelay};
`;

export const PortfolioIcon = styled(GithubIcon)`
  width: 40px;
  height: 39px;
  object-fit: cover;
  color: ${({ theme }) => theme.colors.blue};
  transition: color ${transitionTime} ease-in-out;
  transition-delay: ${transitionDelay};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 32px;
    height: 31px;
  }
`;

export const PortfolioHeader = styled.h2`
  font-size: 30px;
  letter-spacing: 0.05em;
  font-weight: 900;
  margin: 12px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 18px;
  }
`;

export const PortfolioDescription = styled.p`
  font-size: 20px;
  letter-spacing: 0.05em;
  margin: 8px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 17px;
    margin: 16px 0 0 0;
  }
`;

export const PortfolioList = styled.ul`
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  justify-items: center;
  gap: 32px;
  margin: 24px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;
  }
`;
