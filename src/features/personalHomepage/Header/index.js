import {
  StyledHeader,
  HeaderImage,
  HeaderContent,
  HeaderPreview,
  HeaderName,
  HeaderDescription,
} from "./styled";
import { Button } from "../../../common/Button";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderImage
        src={`${process.env.PUBLIC_URL}/assets/images/marcin.jpg`}
        alt="Marcin Augun"
      />
      <div>
        <HeaderPreview>THIS IS</HeaderPreview>
        <HeaderName>Marcin Augun</HeaderName>
        <HeaderDescription>
          👨🏻‍💻 I’m a passionate Frontend Developer in love with React, currently
          looking for new job opportunities.
        </HeaderDescription>
        <Button>
          <img
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
