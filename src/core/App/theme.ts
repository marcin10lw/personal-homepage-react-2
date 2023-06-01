const theme = {
  breakpoints: {
    tablet: 1060,
    mobile: 767,
  },
};

export const lightTheme = {
  ...theme,
  colors: {
    white: "#FFFFFF",
    bodyBackground: "#FBFBFE",
    globalColor: "#6E7E91",
    globalColorSecond: "#252525",
    buttonHover: "#8CC2FF",
    blue: "#0366D6",
    sectionBackground: "#FFFFFF",
    sectionBorder: "rgba(209, 213, 218, 0.3)",
    sectionColor: "#0366D6",
    sectionHoverBorder: "rgba(3, 102, 214, 0.2)",
    grey: "#E5E5E5",
    switchBorder: "rgba(209, 213, 218)",
    switcherColor: "#FFFFFF",
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    white: "#FFFFFF",
    bodyBackground: "#252525",
    globalColor: "#FFFFFF",
    globalColorSecond: "#FFFFFF",
    buttonHover: "#6D93BE",
    blue: "#2188FF",
    sectionBackground: "rgba(54, 54, 54, 0.72)",
    sectionBorder: "rgba(209, 213, 218, 0.1)",
    sectionColor: "#FFFFFF",
    sectionHoverBorder: "rgba(3, 102, 214, 0.5)",
    grey: "#6D6D6D",
    switchBorder: "#D1D5DA",
    switcherColor: "#252525",
  },
};

export const customTheme = lightTheme || darkTheme;
