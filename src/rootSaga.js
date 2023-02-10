import { all } from "redux-saga/effects";
import { watchFetchProjects } from "./features/personalHomepage/projectsSaga";
import { watchSaveDarkThemeToLocalStorage } from "./features/personalHomepage/themeSaga";

export default function* rootSaga() {
  yield all([watchSaveDarkThemeToLocalStorage(), watchFetchProjects()]);
}
