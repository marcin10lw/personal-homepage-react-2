import { motion } from "framer-motion";
import {
  FooterGithub,
  FooterLinkedIn,
  SocialLink,
  StyledSocials,
} from "./styled";

const linkVariants = {
  hidden: {
    opacity: 0,
    x: "-20vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const Socials = () => {
  return (
    <StyledSocials>
      <SocialLink
        as={motion.a}
        variants={linkVariants}
        href="https://github.com/marcin10lw"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FooterGithub />
      </SocialLink>
      <SocialLink
        as={motion.a}
        variants={linkVariants}
        href="https://www.linkedin.com/in/marcin-augun-951659266/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FooterLinkedIn />
      </SocialLink>
    </StyledSocials>
  );
};

export default Socials;
