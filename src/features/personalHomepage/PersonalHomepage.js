import { Container } from "../../common/Container";
import Header from "./Header";
import { Main } from "../../common/Main";
import Section from "../../common/Section";
import Portfolio from "./Portfolio";
import { skillset } from "./skillset";
import { toLearn } from "./toLearn";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProjects } from "./projectsSlice";

function PersonalHomepage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  return (
    <Container>
      <Header />
      <Main>
        <Section heading="My skillset includes" dataList={skillset} />
        <Section heading="What I want to learn next" dataList={toLearn} />
        <Portfolio />
      </Main>
    </Container>
  );
}

export default PersonalHomepage;
