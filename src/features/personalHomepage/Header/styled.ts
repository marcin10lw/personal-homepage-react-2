import styled from "styled-components";
import { transitionDelay, transitionTime } from "../transition";

export const StyledHeader = styled.header`
  margin: 119px 0 0 0;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: 21px 0 0 0;
    text-align: start;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 72px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    align-items: flex-start;
  }
`;

export const HeaderImage = styled.img`
  max-width: 398px;
  width: 100%;
  max-height: 398px;
  object-fit: cover;
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    max-width: 128px;
    margin: 13px 0 0 0;
  }
`;

export const HeaderPreview = styled.div`
  font-size: 12px;
  font-weight: 700;
`;

export const HeaderName = styled.h1`
  font-size: 38px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.globalColorSecond};
  letter-spacing: 0.05em;
  margin: 12px 0 0 0;
  transition: color ${transitionTime} ease-in-out;
  transition-delay: ${transitionDelay};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 22px;
    margin: 8px 0 0 0;
  }
`;

export const HeaderDescription = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.05em;
  margin: 35px 0 32px;
  max-width: 600px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    max-width: 700px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    max-width: 600px;
    font-size: 17px;
    margin: 16px 0 24px;
    max-width: auto;
  }
`;

export const EnvelopeImage = styled.img`
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 20px;
    height: 20px;
  }
`;
