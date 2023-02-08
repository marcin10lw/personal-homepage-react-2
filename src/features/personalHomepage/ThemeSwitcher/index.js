import {
  Wrapper,
  ThemeStatus,
  Switcher,
  SwitcherBall,
  Brightness,
} from "./styled";

const ThemeSwitcher = () => {
  return (
    <Wrapper>
      <ThemeStatus>DARK MODE OFF</ThemeStatus>
      <Switcher>
        <SwitcherBall>
          <Brightness />
        </SwitcherBall>
      </Switcher>
    </Wrapper>
  );
};

export default ThemeSwitcher;
