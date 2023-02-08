import { Container } from "../../common/Container";
import ThemeSwitcher from "./ThemeSwitcher";
import Header from "./Header";

function PersonalHomepage() {
  return (
    <Container>
      <ThemeSwitcher />
      <Header />
    </Container>
  );
}

export default PersonalHomepage;
