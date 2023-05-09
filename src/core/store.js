import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/personalHomepage/themeSlice";
import projectsReducer from "../features/personalHomepage/projectsSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    projects: projectsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
