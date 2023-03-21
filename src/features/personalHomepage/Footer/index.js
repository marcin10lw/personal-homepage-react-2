import {
  StyledFooter,
  FooterHeading,
  FooterLink,
  FooterContent,
  Socials,
  SocialLink,
  FooterGithub,
  FooterLinkedIn,
} from "./styled";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterHeading>LET'S TALK!</FooterHeading>
      <FooterLink href="mailto:marcin.augun@gmail.com">
        marcin.augun@gmail.com
      </FooterLink>
      <FooterContent>
        I’m always open to new projects whenever I have the time. If you have a
        website, dashboard or mobile app in mind and need some help to make your
        ideas come to life, feel free to conatct me
      </FooterContent>
      <Socials>
        <SocialLink
          href="https://github.com/marcin10lw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FooterGithub />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/marcin-augun-951659266/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FooterLinkedIn />
        </SocialLink>
      </Socials>
    </StyledFooter>
  );
};

export default Footer;
