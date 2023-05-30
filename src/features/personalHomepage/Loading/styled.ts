import styled, { keyframes } from "styled-components";
import { transitionDelay, transitionTime } from "../transition";

export const StyledLoading = styled.div`
  text-align: center;
  margin: 88px 0 0 0;
`;

export const LoadingMessage = styled.p`
  font-size: 20px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.globalColorSecond};
  transition: color ${transitionTime} ease-in-out;
  transition-delay: ${transitionDelay};
`;

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.div`
  width: 160px;
  height: 160px;
  margin: 48px auto 0;
  border: 11.375px solid rgba(209, 213, 218, 0.3);
  border-top: 11.375px solid ${({ theme }) => theme.colors.blue};
  border-radius: 50%;
  animation: ${spinner} 1s linear infinite;
`;
