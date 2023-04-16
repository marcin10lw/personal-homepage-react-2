import {
  StyledHeader,
  HeaderImage,
  HeaderPreview,
  HeaderName,
  HeaderDescription,
  EnvelopeImage,
} from "./styled";
import { Button } from "../Button";
import { useSelector } from "react-redux";
import { selectisDarkTheme } from "../themeSlice";
import ThemeSwitcher from "../ThemeSwitcher";

const Header = () => {
  const isDarkTheme = useSelector(selectisDarkTheme);

  const onButtonClick = () => {
    const email = "marcin.augun@gmail.com";
    window.location.href = `mailto:${email}`;
  };

  return (
    <StyledHeader>
      <ThemeSwitcher />
      <HeaderImage
        src={`${process.env.PUBLIC_URL}/assets/images/marcin.jpg`}
        alt="Marcin Augun"
      />
      <div>
        <HeaderPreview>THIS IS</HeaderPreview>
        <HeaderName>Marcin Augun</HeaderName>
        <HeaderDescription>
          I am searching for a job as junior frontend developer, where I will be
          able do develop and gain professional experience. I am passionate
          about creating beautiful and intuitive user interfaces in React. I am
          constantly seeking out new design trends and coding techniques to
          ensure that my work is both modern and efficient.
        </HeaderDescription>
        <Button onClick={onButtonClick}>
          <EnvelopeImage
            src={`${process.env.PUBLIC_URL}/assets/images/envelope-icon.svg`}
            alt=""
          />
          Let's talk
        </Button>
      </div>
    </StyledHeader>
  );
};

export default Header;
