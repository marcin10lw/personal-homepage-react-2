import { all } from "redux-saga/effects";
import { watchFetchProjects } from "../features/personalHomepage/projectsSaga";
import { watchSaveisDarkThemeToLocalStorage } from "../features/personalHomepage/themeSaga";

export default function* rootSaga() {
  yield all([watchSaveisDarkThemeToLocalStorage(), watchFetchProjects()]);
}
