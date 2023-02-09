import { useDispatch, useSelector } from "react-redux";
import { selectDarkTheme, toggleDarkTheme } from "../themeSlice";
import {
  Wrapper,
  ThemeStatus,
  Switcher,
  SwitcherBall,
  Brightness,
} from "./styled";

const ThemeSwitcher = () => {
  const darkModeOn = useSelector(selectDarkTheme);
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(toggleDarkTheme());
  };

  return (
    <Wrapper>
      <ThemeStatus darkMode={darkModeOn}>{`DARK MODE ${
        darkModeOn ? "ON" : "OFF"
      }`}</ThemeStatus>
      <Switcher darkMode={darkModeOn} onClick={onButtonClick}>
        <SwitcherBall darkMode={darkModeOn}>
          <Brightness darkMode={darkModeOn} />
        </SwitcherBall>
      </Switcher>
    </Wrapper>
  );
};

export default ThemeSwitcher;
