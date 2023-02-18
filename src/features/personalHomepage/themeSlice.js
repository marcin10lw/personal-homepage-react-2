import { createSlice } from "@reduxjs/toolkit";
import { getisDarkThemeFromLocalStorage } from "./themeLocalStorage";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkTheme: getisDarkThemeFromLocalStorage(),
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
