import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getProjects } from "./getProjects";
import {
  fetchProjects,
  fetchProjectsError,
  fetchProjectsSuccess,
} from "./projectsSlice";

const EXAMPLE_DELAY = 1000;

function* fetchProjectsHandler() {
  try {
    yield delay(EXAMPLE_DELAY);
    const projects = yield call(getProjects);
    console.log(projects);
    yield put(fetchProjectsSuccess(projects));
  } catch (error) {
    yield delay(EXAMPLE_DELAY);
    yield put(fetchProjectsError());
  }
}

export function* watchFetchProjects() {
  yield takeLatest(fetchProjects.type, fetchProjectsHandler);
}
