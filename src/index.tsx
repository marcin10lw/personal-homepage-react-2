import React from "react";
import ReactDOM from "react-dom/client";
import App from "./core/App";
import { Provider } from "react-redux";
import { store } from "./core/store";
import { ToggleThemeProvider } from "./features/personalHomepage/ToggleThemeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToggleThemeProvider>
        <App />
      </ToggleThemeProvider>
    </Provider>
  </React.StrictMode>
);