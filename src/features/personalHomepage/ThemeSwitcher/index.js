import {
  Wrapper,
  ThemeStatus,
  Switcher,
  SwitcherBall,
  Brightness,
} from "./styled";
import { useContext } from "react";
import { ToggleThemeContext } from "../ToggleThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ToggleThemeContext);
  const isDarkTheme = theme === "dark";

  const onButtonClick = () => {
    setTimeout(() => {
      toggleTheme();
    }, 140);
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
