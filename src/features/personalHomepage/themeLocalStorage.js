const localStorageKey = "theme";

export const getIsDarkThemeFromLocalStorage = () => {
  const localStorageTheme = JSON.parse(localStorage.getItem(localStorageKey));
  if (localStorageTheme === null) {
    return true;
  }

  return localStorageTheme;
};

export const saveisDarkThemeToLocalStorage = (value) => {
  localStorage.setItem(localStorageKey, JSON.stringify(value));
};