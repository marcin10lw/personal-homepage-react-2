import { motion } from "framer-motion";
import {
  StyledProject,
  ProjectName,
  ProjectDescription,
  ProjectDemo,
  ProjectCode,
  ProjectLink,
} from "./styled";
import useInViewAnimation from "../../useInViewAnimation";

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

type ProjectProps = {
  projectName: string;
  description: string;
  code: string;
  userName: string;
};

const Project = ({
  projectName,
  description,
  code,
  userName,
}: ProjectProps) => {
  const { animation, ref } = useInViewAnimation(0.4);

  return (
    <StyledProject
      as={motion.li}
      ref={ref}
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
