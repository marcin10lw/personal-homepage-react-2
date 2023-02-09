import { createSlice } from "@reduxjs/toolkit";
import { getDarkThemeFromLocalStorage } from "./themeLocalStorage";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkTheme: getDarkThemeFromLocalStorage(),
  },
  reducers: {
    toggleDarkTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { toggleDarkTheme } = themeSlice.actions;

const selectThemeState = (state) => state.theme;

export const selectDarkTheme = (state) => selectThemeState(state).darkTheme;

export default themeSlice.reducer;
