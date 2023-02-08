import styled from "styled-components";

const staleGrey = ({ theme }) => theme.colors.staleGrey;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 72px;
  margin: 119px 0 0 0;
`;

export const HeaderImage = styled.img`
  max-width: 398px;
  width: 100%;
  max-height: 398px;
  object-fit: cover;
  border-radius: 50%;
`;

export const HeaderPreview = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${staleGrey};
`;

export const HeaderName = styled.h1`
  font-size: 38px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.mineShaft};
  letter-spacing: 0.05em;
  margin: 12px 0 0 0;
`;

export const HeaderDescription = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  color: ${staleGrey};
  letter-spacing: 1.9px;
  margin: 35px 0 32px;
`;
