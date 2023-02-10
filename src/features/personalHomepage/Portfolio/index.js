import {
  StyledPortfolio,
  PortfolioIcon,
  PortfolioHeader,
  PortfolioDescription,
  PortfolioWrapper,
  PortfolioGrid,
} from "./styled";
import Project from "./Project";
import { useSelector } from "react-redux";
import { selectProjects } from "../projectsSlice";
import { selectDarkTheme } from "../themeSlice";

const Portfolio = () => {
  const projects = useSelector(selectProjects);
  const darkTheme = useSelector(selectDarkTheme);

  return (
    <StyledPortfolio>
      <PortfolioWrapper darkTheme={darkTheme}>
        <PortfolioIcon darkTheme={darkTheme} />
        <PortfolioHeader>Portfolio</PortfolioHeader>
        <PortfolioDescription>My recent projects</PortfolioDescription>
      </PortfolioWrapper>
      <PortfolioGrid>
        {projects.map((project) => (
          <Project
            key={project.id}
            projectName={project.name}
            description={project.description}
            code={project.html_url}
            userName={project.owner.login}
          />
        ))}
      </PortfolioGrid>
    </StyledPortfolio>
  );
};

export default Portfolio;
