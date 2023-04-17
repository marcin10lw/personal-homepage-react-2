import { motion, useAnimation, useInView } from "framer-motion";
import {
  StyledProject,
  ProjectName,
  ProjectDescription,
  ProjectDemo,
  ProjectCode,
  ProjectLink,
} from "./styled";
import { useRef } from "react";
import { useEffect } from "react";

const Project = ({ projectName, description, code, userName }) => {
  const projectRef = useRef(null);
  const inView = useInView(projectRef, { amount: 0.4 });
  const animation = useAnimation();

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        bounce: 1,
        mass: 0.7,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <StyledProject
      as={motion.li}
      ref={projectRef}
      variants={variants}
      initial="hidden"
      animate={animation}
    >
      <ProjectName>{projectName}</ProjectName>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectDemo>
        Demo:
        <ProjectLink
          href={`https://${userName}.github.io/${projectName}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {`https://${userName}.github.io/${projectName}/`}
        </ProjectLink>
      </ProjectDemo>
      <ProjectCode>
        Code:
        <ProjectLink href={code} target="_blank" rel="noopener noreferrer">
          {code}
        </ProjectLink>
      </ProjectCode>
    </StyledProject>
  );
};

export default Project;
