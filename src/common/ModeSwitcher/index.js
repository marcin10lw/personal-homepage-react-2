import {
  Wrapper,
  ModeStatus,
  Switcher,
  SwitcherBall,
  BrightnessImage,
} from "./styled";

const ModeSwitcher = () => {
  return (
    <Wrapper>
      <ModeStatus>DARK MODE OFF</ModeStatus>
      <Switcher>
        <SwitcherBall>
          <BrightnessImage
            src={`${process.env.PUBLIC_URL}/assets/images/brightness-icon.svg`}
            alt=""
          />
        </SwitcherBall>
      </Switcher>
    </Wrapper>
  );
};

export default ModeSwitcher;
