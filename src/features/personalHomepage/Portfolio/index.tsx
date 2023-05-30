import {
  StyledPortfolio,
  PortfolioIcon,
  PortfolioHeader,
  PortfolioDescription,
  PortfolioWrapper,
  PortfolioList,
} from "./styled";
import Project from "./Project";
import { useSelector } from "react-redux";
import { selectProjects, selectStatus } from "../projectsSlice";
import Loading from "../Loading";
import Error from "../Error";
import { filterProjects } from "./filterProjects";

const Portfolio = () => {
  const status = useSelector(selectStatus);
  const projects = useSelector(selectProjects);
  const filteredProjects = filterProjects(projects);

  return (
    <StyledPortfolio>
      <PortfolioWrapper>
        <PortfolioIcon />
        <PortfolioHeader>Portfolio</PortfolioHeader>
        <PortfolioDescription>My recent projects</PortfolioDescription>
      </PortfolioWrapper>
      {status === "error" && <Error />}
      {status === "pending" && <Loading />}
      {status === "success" && (
        <PortfolioList>
          {filteredProjects.map((project) => (
            <Project
              key={project.id}
              projectName={project.name}
              description={project.description}
              code={project.html_url}
              userName={project.owner.login}
            />
          ))}
        </PortfolioList>
      )}
    </StyledPortfolio>
  );
};

export default Portfolio;
