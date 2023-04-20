import { createSlice } from "@reduxjs/toolkit";
import { getIsDarkThemeFromLocalStorage } from "./themeLocalStorage";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkTheme: getIsDarkThemeFromLocalStorage(),
  },
  reducers: {
    toggleisDarkTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const { toggleisDarkTheme } = themeSlice.actions;

const selectThemeState = (state) => state.theme;

export const selectisDarkTheme = (state) => selectThemeState(state).isDarkTheme;

export default themeSlice.reducer;
