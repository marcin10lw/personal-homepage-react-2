import { useDispatch, useSelector } from "react-redux";
import { selectDarkModeOn, toggleDarkModeOn } from "../themeSlice";
import {
  Wrapper,
  ThemeStatus,
  Switcher,
  SwitcherBall,
  Brightness,
} from "./styled";

const ThemeSwitcher = () => {
  const darkModeOn = useSelector(selectDarkModeOn);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <ThemeStatus darkMode={darkModeOn}>{`DARK MODE ${
        darkModeOn ? "ON" : "OFF"
      }`}</ThemeStatus>
      <Switcher
        darkMode={darkModeOn}
        onClick={() => dispatch(toggleDarkModeOn())}
      >
        <SwitcherBall darkMode={darkModeOn}>
          <Brightness darkMode={darkModeOn} />
        </SwitcherBall>
      </Switcher>
    </Wrapper>
  );
};

export default ThemeSwitcher;
