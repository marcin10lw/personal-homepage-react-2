import { call, select, takeEvery } from "redux-saga/effects";
import { saveDarkThemeToLocalStorage } from "./themeLocalStorage";
import { selectDarkTheme } from "./themeSlice";

function* saveDarkThemeToLocalStorageHandler() {
  const darkTheme = yield select(selectDarkTheme);
  yield call(saveDarkThemeToLocalStorage, darkTheme);
}

export function* watchSaveDarkThemeToLocalStorage() {
  yield takeEvery("*", saveDarkThemeToLocalStorageHandler);
}
