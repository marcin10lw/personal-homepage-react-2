import { useSelector } from "react-redux";
import { selectisDarkTheme } from "../../themeSlice";
import {
  StyledProject,
  ProjectName,
  ProjectDescription,
  ProjectDemo,
  ProjectCode,
  ProjectLink,
} from "./styled";

const Project = ({ projectName, description, code, userName }) => {
  const isDarkTheme = useSelector(selectisDarkTheme);

  return (
    <StyledProject isDarkTheme={isDarkTheme}>
      <ProjectName isDarkTheme={isDarkTheme}>{projectName}</ProjectName>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectDemo>
        Demo:
        <ProjectLink
          isDarkTheme={isDarkTheme}
          href={`https://${userName}.github.io/${projectName}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {`https://${userName}.github.io/${projectName}/`}
        </ProjectLink>
      </ProjectDemo>
      <ProjectCode>
        Code:
        <ProjectLink
          isDarkTheme={isDarkTheme}
          href={code}
          target="_blank"
          rel="noopener noreferrer"
        >
          {code}
        </ProjectLink>
      </ProjectCode>
    </StyledProject>
  );
};

export default Project;
