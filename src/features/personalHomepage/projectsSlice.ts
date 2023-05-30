import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../core/store";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
    status: "idle",
  },
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
