import styled, { css } from "styled-components";
import { ReactComponent as DangerIcon } from "./images/danger-icon.svg";

const bpMobile = ({ theme }) => theme.breakpoints.mobile;

export const StyledError = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.globalColorSecond};
  max-width: 420px;
  margin: 88px auto 0;

  @media (max-width: ${bpMobile}px) {
    margin-top: 50px;
  }
`;

export const ErrorIcon = styled(DangerIcon)`
  width: 37px;

  @media (max-width: ${bpMobile}px) {
    width: 30px;
  }
`;

export const ErrorHeader = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0.05em;
  margin: 16px 0 0 0;

  @media (max-width: ${bpMobile}px) {
    font-size: 18px;
    margin: 10px 0 0 0;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  margin: 32px 0;

  @media (max-width: ${bpMobile}px) {
    font-size: 16px;
    margin: 20px 0;
  }
`;
