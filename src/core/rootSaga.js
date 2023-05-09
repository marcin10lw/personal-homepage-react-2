import { all } from "redux-saga/effects";
import { watchFetchProjects } from "../features/personalHomepage/projectsSaga";

export default function* rootSaga() {
  yield all([watchFetchProjects()]);
}
