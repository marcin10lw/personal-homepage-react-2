import { useSelector } from "react-redux";
import { selectisDarkTheme } from "../themeSlice";
import {
  StyledFooter,
  FooterHeading,
  FooterLink,
  FooterContent,
  Socials,
  SocialLink,
  FooterGithub,
  FooterLinkedIn,
  FooterFacebook,
} from "./styled";

const Footer = () => {
  const isDarkTheme = useSelector(selectisDarkTheme);

  return (
    <StyledFooter>
      <FooterHeading>LET'S TALK!</FooterHeading>
      <FooterLink isDarkTheme={isDarkTheme} href="mailto:marcin.augun@gmail.com">
        marcin.augun@gmail.com
      </FooterLink>
      <FooterContent isDarkTheme={isDarkTheme}>
        I’m always open to new projects whenever I have the time. If you have a
        website, dashboard or mobile app in mind and need some help to make your
        ideas come to life, feel free to conatct me
      </FooterContent>
      <Socials>
        <SocialLink
          isDarkTheme={isDarkTheme}
          href="https://github.com/marcin10lw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FooterGithub />
        </SocialLink>
        <SocialLink
          isDarkTheme={isDarkTheme}
          href="https://www.linkedin.com/in/marcin-augun-951659266/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FooterLinkedIn />
        </SocialLink>
        <SocialLink
          isDarkTheme={isDarkTheme}
          href="https://www.facebook.com/profile.php?id=100004929347890"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FooterFacebook />
        </SocialLink>
      </Socials>
    </StyledFooter>
  );
};

export default Footer;
