import styled, { css } from "styled-components";
import { ReactComponent as GithubIcon } from "./images/github-icon.svg";
import { ReactComponent as LinkedInIcon } from "./images/linkedin-icon.svg";
import { ReactComponent as FacebookInIcon } from "./images/facebook-icon.svg";

const mineShaft = ({ theme }) => theme.colors.mineShaft;
const white = ({ theme }) => theme.colors.white;
const dodgerBlue = ({ theme }) => theme.colors.dodgerBlue;
const scienceBlue = ({ theme }) => theme.colors.scienceBlue;

const bpMobile = ({ theme }) => theme.breakpoints.mobile;

export const StyledFooter = styled.footer`
  margin: 120px 0 109px;

  @media (max-width: ${bpMobile}px) {
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
  color: ${mineShaft};
  display: inline-block;
  margin: 24px 0;
  transition: color 120ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
    opacity: 0.8;
  }

  &:hover {
    color: ${scienceBlue};
  }

  @media (max-width: ${bpMobile}px) {
    font-size: 18px;
    margin: 12px 0;
  }

  ${({ darkTheme }) =>
    darkTheme &&
    css`
      color: ${white};

      &:hover {
        color: ${dodgerBlue};
      }
    `}
`;

export const FooterContent = styled.p`
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  color: ${mineShaft};
  margin: 0;
  max-width: 670px;

  @media (max-width: ${bpMobile}px) {
    font-size: 14px;
    line-height: 17px;
  }

  ${({ darkTheme }) =>
    darkTheme &&
    css`
      color: ${white};
    `}
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin: 56px 0 0 0;

  @media (max-width: ${bpMobile}px) {
    margin: 40px 0 0 0;
    gap: 16px;
  }
`;

export const SocialLink = styled.a`
  display: block;
  color: ${mineShaft};
  transition: color 120ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 48px;

  &:focus {
    outline: none;
    opacity: 0.8;
  }

  &:hover {
    color: ${scienceBlue};
  }

  @media (max-width: ${bpMobile}px) {
    width: 32px;
  }

  ${({ darkTheme }) =>
    darkTheme &&
    css`
      color: ${white};

      &:hover {
        color: ${dodgerBlue};
      }
    `}
`;

export const FooterGithub = styled(GithubIcon)`
  width: 100%;
`;

export const FooterLinkedIn = styled(LinkedInIcon)`
  width: 100%;
`;

export const FooterFacebook = styled(FacebookInIcon)`
  width: 100%;
`;
