import styled, { css } from "styled-components";

const scienceBlue = ({ theme }) => theme.colors.scienceBlue;
const dodgerBlue = ({ theme }) => theme.colors.dodgerBlue;
const white = ({ theme }) => theme.colors.white;

const bpMobile = ({ theme }) => theme.breakpoints.mobile;

export const StyledProject = styled.li`
  width: 100%;
  padding: 56px;
  background-color: ${white};
  border: 6px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);

  transition: border 120ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border: 6px solid rgba(3, 102, 214, 0.2);
  }

  @media (max-width: ${bpMobile}px) {
    padding: 24px;
  }

  ${({ isDarkTheme }) =>
    isDarkTheme &&
    css`
      background-color: rgba(54, 54, 54, 0.72);
      border: 6px solid rgba(209, 213, 218, 0.1);

      &:hover {
        border: 6px solid rgba(3, 102, 214, 0.5);
      }
    `}
`;

export const ProjectName = styled.h3`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: ${scienceBlue};
  margin: 0;

  @media (max-width: ${bpMobile}px) {
    font-size: 16px;
  }

  ${({ isDarkTheme }) =>
    isDarkTheme &&
    css`
      color: ${white};
    `}
`;

export const ProjectDescription = styled.p`
  font-size: 18px;
  letter-spacing: 0.05em;
  line-height: 1.4;
  margin: 24px 0;

  @media (max-width: ${bpMobile}px) {
    font-size: 14px;
    line-height: 17px;
    margin: 16px 0;
  }
`;

export const ProjectDemo = styled.div`
  margin: 8px 0 0 0;
  font-size: 18px;
  letter-spacing: 0.05em;

  @media (max-width: ${bpMobile}px) {
    font-size: 14px;
    margin: 10px 0 0 0;
  }
`;

export const ProjectCode = styled(ProjectDemo)``;

export const ProjectLink = styled.a`
  line-height: 1.4;
  color: ${scienceBlue};
  margin: 0 0 0 8px;
  text-decoration: none;
  border-bottom: 1px solid rgb(3 102 214 / 20%);
  word-wrap: break-word;

  &:focus {
    outline: none;
    border-bottom: 1px solid ${scienceBlue};
  }

  &:hover {
    opacity: 0.85;
  }

  ${({ isDarkTheme }) =>
    isDarkTheme &&
    css`
      color: ${dodgerBlue};

      &:focus {
        border-bottom: 1px solid rgb(33 136 255 / 40%);
      }
    `}
`;
