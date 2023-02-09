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
  const darkTheme = useSelector(selectDarkTheme);
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(toggleDarkTheme());
  };

  return (
    <Wrapper>
      <ThemeStatus darkTheme={darkTheme}>{`DARK MODE ${
        darkTheme ? "ON" : "OFF"
      }`}</ThemeStatus>
      <Switcher darkTheme={darkTheme} onClick={onButtonClick}>
        <SwitcherBall darkTheme={darkTheme}>
          <Brightness darkTheme={darkTheme} />
        </SwitcherBall>
      </Switcher>
    </Wrapper>
  );
};

export default ThemeSwitcher;
