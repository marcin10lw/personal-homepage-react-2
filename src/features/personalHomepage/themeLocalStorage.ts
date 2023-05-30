import { Theme } from "./ToggleThemeContext";

const localStorageKey = "theme";

export const getThemeFromLocalStorage = (
  initialValue: Theme | "no-preference"
) => {
  const localStorageTheme: Theme = JSON.parse(
    localStorage.getItem(localStorageKey) as string
  );

  if (localStorageTheme === null) {
    if (initialValue === "no-preference") {
      return "light";
    } else {
      return initialValue;
    }
  }

  return localStorageTheme;
};

export const saveThemeToLocalStorage = (value: Theme) => {
  localStorage.setItem(localStorageKey, JSON.stringify(value));
};
