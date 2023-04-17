const localStorageKey = "theme";

export const getisDarkThemeFromLocalStorage = () => {
  const localStorageTheme = JSON.parse(localStorage.getItem(localStorageKey));
  return localStorageTheme || true;
};

export const saveisDarkThemeToLocalStorage = (value) => {
  localStorage.setItem(localStorageKey, JSON.stringify(value));
};
