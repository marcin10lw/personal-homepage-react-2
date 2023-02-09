import { useSelector } from "react-redux";
import PersonalHomepage from "./features/personalHomepage/PersonalHomepage";
import { selectDarkTheme } from "./features/personalHomepage/themeSlice";
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  const darkTheme = useSelector(selectDarkTheme);

  return (
    <>
      <GlobalStyle darkTheme={darkTheme} />
      <PersonalHomepage />
    </>
  );
};

export default App;
