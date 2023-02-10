import { all } from "redux-saga/effects";
import { watchSaveDarkThemeToLocalStorage } from "./features/personalHomepage/themeSaga";

export default function* rootSaga() {
  yield all([watchSaveDarkThemeToLocalStorage()]);
}