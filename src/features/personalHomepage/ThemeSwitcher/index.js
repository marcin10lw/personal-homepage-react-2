import { useDispatch, useSelector } from "react-redux";
import { selectisDarkTheme, toggleisDarkTheme } from "../themeSlice";
import {
  Wrapper,
  ThemeStatus,
  Switcher,
  SwitcherBall,
  Brightness,
} from "./styled";

const ThemeSwitcher = () => {
  const isDarkTheme = useSelector(selectisDarkTheme);
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(toggleisDarkTheme());
  };

  return (
    <Wrapper>
      <ThemeStatus isDarkTheme={isDarkTheme}>{`DARK MODE ${
        isDarkTheme ? "ON" : "OFF"
      }`}</ThemeStatus>
      <Switcher isDarkTheme={isDarkTheme} onClick={onButtonClick}>
        <SwitcherBall isDarkTheme={isDarkTheme}>
          <Brightness />
        </SwitcherBall>
      </Switcher>
    </Wrapper>
  );
};

export default ThemeSwitcher;
