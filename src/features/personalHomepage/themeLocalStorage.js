const localStorageKey = "theme";

export const getThemeFromLocalStorage = (initialValue) => {
  const localStorageTheme = JSON.parse(localStorage.getItem(localStorageKey));
  if (localStorageTheme === null) {
    return initialValue;
  }

  return localStorageTheme;
};

export const saveThemeToLocalStorage = (value) => {
  localStorage.setItem(localStorageKey, JSON.stringify(value));
};
