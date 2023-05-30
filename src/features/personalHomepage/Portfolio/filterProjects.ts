import { Project } from "../projectsSlice";

const ignoredProjectsNames = ["marcin10lw", "Invoice-app"];

export const filterProjects = (projects: Project[]) => {
  return projects.filter((project) => {
    return (
      project.name !==
      ignoredProjectsNames.find((name) => name === project.name)
    );
  });
};
