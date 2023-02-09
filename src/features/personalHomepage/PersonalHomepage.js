import { Container } from "../../common/Container";
import ThemeSwitcher from "./ThemeSwitcher";
import Header from "./Header";
import { Main } from "../../common/Main";
import Section from "../../common/Section";
import { skillset } from "./skillset";
import { toLearn } from "./toLearn";

function PersonalHomepage() {
  return (
    <Container>
      <ThemeSwitcher />
      <Header />
      <Main>
        <Section heading="My skillset includes" dataList={skillset} />
        <Section heading="What I want to learn next" dataList={toLearn} />
      </Main>
    </Container>
  );
}

export default PersonalHomepage;
