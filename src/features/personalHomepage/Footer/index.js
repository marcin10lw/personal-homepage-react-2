import { useSelector } from "react-redux";
import { selectDarkTheme } from "../themeSlice";
import {
  StyledFooter,
  FooterHeading,
  FooterLink,
  FooterContent,
  Socials,
  FooterGithub,
  SocialLink,
} from "./styled";

const Footer = () => {
  const darkTheme = useSelector(selectDarkTheme);

  return (
    <StyledFooter>
      <FooterHeading>LET'S TALK!</FooterHeading>
      <FooterLink darkTheme={darkTheme} href="mailto:marcin.augun@gmail.com">
        marcin.augun@gmail.com
      </FooterLink>
      <FooterContent darkTheme={darkTheme}>
        I’m always open to new projects whenever I have the time. If you have a
        website, dashboard or mobile app in mind and need some help to make your
        ideas come to life, feel free to conatct me
      </FooterContent>
      <Socials>
        <SocialLink
          darkTheme={darkTheme}
          href="https://github.com/marcin10lw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FooterGithub />
        </SocialLink>
      </Socials>
    </StyledFooter>
  );
};

export default Footer;
