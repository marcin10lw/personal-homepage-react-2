import styled from "styled-components";
import { ReactComponent as GithubIcon } from "./images/github-icon.svg";

const bpMobile = ({ theme }) => theme.breakpoints.mobile;

export const StyledPortfolio = styled.section`
  margin: 72px 0 0;
`;

export const PortfolioWrapper = styled.div`
  color: ${({ theme }) => theme.colors.headerColor};
  text-align: center;
`;

export const PortfolioIcon = styled(GithubIcon)`
  width: 40px;
  height: 39px;
  object-fit: cover;
  color: ${({ theme }) => theme.colors.blue};

  @media (max-width: ${bpMobile}px) {
    width: 32px;
    height: 31px;
  }
`;

export const PortfolioHeader = styled.h2`
  font-size: 30px;
  letter-spacing: 0.05em;
  font-weight: 900;
  margin: 12px 0 0 0;

  @media (max-width: ${bpMobile}px) {
    font-size: 18px;
  }
`;

export const PortfolioDescription = styled.p`
  font-size: 20px;
  letter-spacing: 0.05em;
  margin: 8px 0 0 0;

  @media (max-width: ${bpMobile}px) {
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

  @media (max-width: ${bpMobile}px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;
  }
`;
