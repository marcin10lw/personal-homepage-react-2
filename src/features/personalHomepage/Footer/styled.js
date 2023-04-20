import styled from "styled-components";
import { transitionDelay, transitionTime } from "../transition";

export const StyledFooter = styled.footer`
  margin: 120px 0 109px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: 48px 0 31px;
  }
`;

export const FooterHeading = styled.h4`
  font-size: 12px;
  line-height: 1.3;
  font-weight: 700;
  margin: 0;
`;

export const FooterLink = styled.a`
  font-size: 32px;
  line-height: 39px;
  font-weight: 900;
  letter-spacing: 0.05em;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.globalColorSecond};
  display: inline-block;
  margin: 24px 0;
  transition: color ${transitionTime} ease-in-out;
  transition-delay: ${transitionDelay};

  &:focus {
    outline: none;
    opacity: 0.8;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 18px;
    margin: 12px 0;
  }
`;

export const FooterContent = styled.p`
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.globalColorSecond};
  margin: 0;
  max-width: 670px;
  transition: color ${transitionTime} ease-in-out;
  transition-delay: ${transitionDelay};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
    line-height: 17px;
  }
`;
