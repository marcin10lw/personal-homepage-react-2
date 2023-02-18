import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import PersonalHomepage from "./features/personalHomepage/PersonalHomepage";
import { selectisDarkTheme } from "./features/personalHomepage/themeSlice";
import { GlobalStyle } from "./GlobalStyle";
import { theme, darkTheme } from "./theme";

const App = () => {
  const isDarkTheme = useSelector(selectisDarkTheme);

  const providerTheme = isDarkTheme ? darkTheme : theme;

  return (
    <>
      <ThemeProvider theme={providerTheme}>
        <GlobalStyle />
        <PersonalHomepage />
      </ThemeProvider>
    </>
  );
};

export default App;
