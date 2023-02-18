import styled, { css } from "styled-components";

const staleGrey = ({ theme }) => theme.colors.staleGrey;
const white = ({ theme }) => theme.colors.white;
const bpMobile = ({ theme }) => theme.breakpoints.mobile;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 72px;
  margin: 119px 0 0 0;
  position: relative;

  @media (max-width: ${bpMobile}px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin: 21px 0 0 0;
  }
`;

export const HeaderImage = styled.img`
  max-width: 398px;
  width: 100%;
  max-height: 398px;
  object-fit: cover;
  border-radius: 50%;

  @media (max-width: ${bpMobile}px) {
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
  color: ${({ theme }) => theme.colors.headerColor};
  letter-spacing: 0.05em;
  margin: 12px 0 0 0;

  @media (max-width: ${bpMobile}px) {
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

  @media (max-width: ${bpMobile}px) {
    font-size: 17px;
    margin: 16px 0 24px;
  }
`;

export const EnvelopeImage = styled.img`
  object-fit: cover;

  @media (max-width: ${bpMobile}px) {
    width: 20px;
    height: 20px;
  }
`;
