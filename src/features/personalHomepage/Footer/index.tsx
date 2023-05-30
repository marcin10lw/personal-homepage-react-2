import { motion } from "framer-motion";
import {
  StyledFooter,
  FooterHeading,
  FooterLink,
  FooterContent,
} from "./styled";
import useInViewAnimation from "../useInViewAnimation";
import Socials from "./Socials";

const footerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    originX: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const Footer = () => {
  const { animation, ref } = useInViewAnimation(0.5);

  return (
    <StyledFooter
      as={motion.footer}
      ref={ref}
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
      <Socials />
    </StyledFooter>
  );
};

export default Footer;
