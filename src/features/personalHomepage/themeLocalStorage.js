const localStorageKey = "theme";

export const getThemeFromLocalStorage = (initialValue) => {
  const localStorageTheme = JSON.parse(localStorage.getItem(localStorageKey));

  if (localStorageTheme === null) {
    if (initialValue === "no-preference") {
      return "light";
    } else {
      return initialValue;
    }
  }

  return localStorageTheme;
};

export const saveThemeToLocalStorage = (value) => {
  localStorage.setItem(localStorageKey, JSON.stringify(value));
};
