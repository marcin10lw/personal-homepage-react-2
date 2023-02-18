import { call, select, takeEvery } from "redux-saga/effects";
import { saveisDarkThemeToLocalStorage } from "./themeLocalStorage";
import { selectisDarkTheme } from "./themeSlice";

function* saveisDarkThemeToLocalStorageHandler() {
  const isDarkTheme = yield select(selectisDarkTheme);
  yield call(saveisDarkThemeToLocalStorage, isDarkTheme);
}

export function* watchSaveisDarkThemeToLocalStorage() {
  yield takeEvery("*", saveisDarkThemeToLocalStorageHandler);
}
