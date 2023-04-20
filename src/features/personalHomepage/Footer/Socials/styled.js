import styled from "styled-components";
import { transitionDelay, transitionTime } from "../../transition";
import { ReactComponent as GithubIcon } from "./images/github-icon.svg";
import { ReactComponent as LinkedInIcon } from "./images/linkedin-icon.svg";

export const StyledSocials = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin: 56px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: 40px 0 0 0;
    gap: 16px;
  }
`;

export const SocialLink = styled.a`
  display: block;
  color: ${({ theme }) => theme.colors.globalColorSecond};
  transition: color 120ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 48px;
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
    width: 32px;
  }
`;

export const FooterGithub = styled(GithubIcon)`
  width: 100%;
`;

export const FooterLinkedIn = styled(LinkedInIcon)`
  width: 100%;
`;
