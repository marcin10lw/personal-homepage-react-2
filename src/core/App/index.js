import { ThemeProvider } from "styled-components";
import PersonalHomepage from "../../features/personalHomepage/PersonalHomepage";
import { GlobalStyle } from "./GlobalStyle";
import { lightTheme, darkTheme } from "./theme";
import { useContext } from "react";
import { ToggleThemeContext } from "../../features/personalHomepage/ToggleThemeContext";

const App = () => {
  const { theme } = useContext(ToggleThemeContext);

  const providerTheme = theme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={providerTheme}>
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
};

export default App;
