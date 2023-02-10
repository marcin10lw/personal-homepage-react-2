import {
  StyledHeader,
  HeaderImage,
  HeaderPreview,
  HeaderName,
  HeaderDescription,
  EnvelopeImage,
} from "./styled";
import { Button } from "../../../common/Button";
import { useSelector } from "react-redux";
import { selectDarkTheme } from "../themeSlice";
import ThemeSwitcher from "../ThemeSwitcher";

const Header = () => {
  const darkTheme = useSelector(selectDarkTheme);

  return (
    <StyledHeader>
      <ThemeSwitcher />
      <HeaderImage
        src={`${process.env.PUBLIC_URL}/assets/images/marcin.jpg`}
        alt="Marcin Augun"
      />
      <div>
        <HeaderPreview>THIS IS</HeaderPreview>
        <HeaderName darkTheme={darkTheme}>Marcin Augun</HeaderName>
        <HeaderDescription>
          👨🏻‍💻 I’m a passionate Frontend Developer in love with React, currently
          looking for new job opportunities.
        </HeaderDescription>
        <Button darkTheme={darkTheme}>
          <EnvelopeImage
            src={`${process.env.PUBLIC_URL}/assets/images/envelope-icon.svg`}
            alt=""
          />
          Hire Me
        </Button>
      </div>
    </StyledHeader>
  );
};

export default Header;
