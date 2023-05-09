import { createContext } from "react";
import {
  getIsDarkThemeFromLocalStorage,
  saveisDarkThemeToLocalStorage,
} from "./themeLocalStorage";
import { useState } from "react";
import { useEffect } from "react";

export const ToggleThemeContext = createContext();

export const ToggleThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getIsDarkThemeFromLocalStorage());

  const toggleTheme = () =>
    setTheme((theme) => {
      if (theme === "dark") return "light";

      return "dark";
    });

  useEffect(() => {
    saveisDarkThemeToLocalStorage(theme);
  }, [theme]);

  return (
    <ToggleThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ToggleThemeContext.Provider>
  );
};
