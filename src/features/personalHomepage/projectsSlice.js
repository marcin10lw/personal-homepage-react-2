import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
    status: "pending",
  },
  reducers: {
    fetchProjects: () => {},
    fetchProjectsSuccess: (state, { payload: projects }) => {
      state.status = "success";
      state.projects = projects;
    },
    fetchProjectsError: ({ status }) => {
      status = "error";
    },
  },
});

export const { fetchProjects, fetchProjectsSuccess, fetchProjectsError } =
  projectsSlice.actions;

const selectProjectsState = (state) => state.projects;
export const selectProjects = (state) => selectProjectsState(state).projects;

export default projectsSlice.reducer;
