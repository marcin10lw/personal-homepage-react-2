import { PropsWithChildren, createContext } from "react";
import {
  getThemeFromLocalStorage,
  saveThemeToLocalStorage,
} from "./themeLocalStorage";
import { useState } from "react";
import { useEffect } from "react";
import usePrefersColorScheme from "use-prefers-color-scheme";

export type Theme = "dark" | "light";

type ToggleThemeContextState = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ToggleThemeContext = createContext({} as ToggleThemeContextState);

export const ToggleThemeProvider = ({ children }: PropsWithChildren) => {
  const prefersColorScheme = usePrefersColorScheme();
  const [theme, setTheme] = useState<Theme>(
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
