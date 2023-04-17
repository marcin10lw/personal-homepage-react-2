import { motion, useAnimation, useInView } from "framer-motion";
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
import { useEffect } from "react";
import { useRef } from "react";

const footerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: "50",
  },
  visible: {
    opacity: 1,
    scale: 1,
    originX: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const Footer = () => {
  const footerRef = useRef(null);
  const inView = useInView(footerRef, { amount: 0.8 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <StyledFooter
      as={motion.footer}
      ref={footerRef}
      variants={footerVariants}
      initial="hidden"
      animate={animation}
    >
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
