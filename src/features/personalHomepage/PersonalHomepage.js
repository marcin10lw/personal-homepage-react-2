import { Container } from "../../common/Container";
import ModeSwitcher from "../../common/ModeSwitcher";
import Header from "./Header";

function PersonalHomepage() {
  return (
    <Container>
      <ModeSwitcher />
      <Header />
    </Container>
  );
}

export default PersonalHomepage;
