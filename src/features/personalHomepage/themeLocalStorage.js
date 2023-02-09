const localStorageKey = "theme";

export const getDarkThemeFromLocalStorage = () => {
  const localStorageTheme = JSON.parse(localStorage.getItem(localStorageKey));
  return localStorageTheme || false;
};

export const saveDarkThemeToLocalStorage = (value) => {
  localStorage.setItem(localStorageKey, JSON.stringify(value));
};
