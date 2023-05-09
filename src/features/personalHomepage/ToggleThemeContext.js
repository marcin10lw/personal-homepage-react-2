import { createContext } from "react";
import {
  getThemeFromLocalStorage,
  saveThemeToLocalStorage,
} from "./themeLocalStorage";
import { useState } from "react";
import { useEffect } from "react";
import usePrefersColorScheme from "use-prefers-color-scheme";

export const ToggleThemeContext = createContext();

export const ToggleThemeProvider = ({ children }) => {
  const prefersColorScheme = usePrefersColorScheme();
  const [theme, setTheme] = useState(
    getThemeFromLocalStorage(prefersColorScheme)
  );

  const toggleTheme = () =>
    setTheme((theme) => {
      if (theme === "dark") return "light";

      return "dark";
    });

  useEffect(() => {
    saveThemeToLocalStorage(theme);
  }, [theme]);

  return (
    <ToggleThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ToggleThemeContext.Provider>
  );
};
