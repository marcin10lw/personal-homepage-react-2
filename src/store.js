import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/personalHomepage/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
