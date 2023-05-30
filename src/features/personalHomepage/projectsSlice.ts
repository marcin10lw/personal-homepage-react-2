import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../core/store";

export type Project = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  owner: {
    login: string;
  };
};

type ProjectsState = {
  projects: Project[];
  status: "idle" | "pending" | "success" | "error";
};

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
    status: "idle",
  } as ProjectsState,
  reducers: {
    fetchProjects: (state) => {
      state.status = "pending";
    },
    fetchProjectsSuccess: (state, { payload: projects }) => {
      state.status = "success";
      state.projects = projects;
    },
    fetchProjectsError: (state) => {
      state.status = "error";
    },
  },
});

export const { fetchProjects, fetchProjectsSuccess, fetchProjectsError } =
  projectsSlice.actions;

const selectProjectsState = (state: RootState) => state.projects;

export const selectProjects = (state: RootState) =>
  selectProjectsState(state).projects;
export const selectStatus = (state: RootState) =>
  selectProjectsState(state).status;

export default projectsSlice.reducer;
