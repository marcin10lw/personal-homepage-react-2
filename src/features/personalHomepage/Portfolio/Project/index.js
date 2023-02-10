import { useSelector } from "react-redux";
import { selectDarkTheme } from "../../themeSlice";
import {
  StyledProject,
  ProjectName,
  ProjectDescription,
  ProjectDemo,
  ProjectCode,
  ProjectLink,
} from "./styled";

const Project = ({ projectName, description, code, userName }) => {
  const darkTheme = useSelector(selectDarkTheme);

  return (
    <StyledProject darkTheme={darkTheme}>
      <ProjectName darkTheme={darkTheme}>{projectName}</ProjectName>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectDemo>
        Demo:
        <ProjectLink
          darkTheme={darkTheme}
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
          darkTheme={darkTheme}
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
