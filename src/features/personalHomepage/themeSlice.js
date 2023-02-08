import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkModeOn: false,
  },
  reducers: {
    toggleDarkModeOn: (state) => {
      state.darkModeOn = !state.darkModeOn;
    },
  },
});

export const { toggleDarkModeOn } = themeSlice.actions;

const selectThemeState = (state) => state.theme;

export const selectDarkModeOn = (state) => selectThemeState(state).darkModeOn;

export default themeSlice.reducer;
