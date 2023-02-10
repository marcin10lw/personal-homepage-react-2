import { call, put, takeLatest } from "redux-saga/effects";
import { getProjects } from "./getProjects";
import {
  fetchProjects,
  fetchProjectsError,
  fetchProjectsSuccess,
} from "./projectsSlice";

function* fetchProjectsHandler() {
  try {
    const projects = yield call(getProjects);
    yield put(fetchProjectsSuccess(projects));
  } catch (error) {
    yield put(fetchProjectsError());
  }
}

export function* watchFetchProjects() {
  yield takeLatest(fetchProjects.type, fetchProjectsHandler);
}
