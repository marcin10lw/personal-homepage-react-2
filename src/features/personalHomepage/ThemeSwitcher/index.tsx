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

  return (
    <Wrapper>
      <ThemeStatus>{`DARK MODE ${isDarkTheme ? "ON" : "OFF"}`}</ThemeStatus>
      <Switcher onClick={() => toggleTheme()}>
        <SwitcherBall isDarkTheme={isDarkTheme}>
          <Brightness />
        </SwitcherBall>
      </Switcher>
    </Wrapper>
  );
};

export default ThemeSwitcher;
