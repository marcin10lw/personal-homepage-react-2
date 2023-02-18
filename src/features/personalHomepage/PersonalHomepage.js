import { Container } from "../../common/Container";
import Header from "./Header";
import Section from "./Section";
import Portfolio from "./Portfolio";
import { skillset } from "./skillset";
import { toLearn } from "./toLearn";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProjects } from "./projectsSlice";
import Footer from "./Footer";

function PersonalHomepage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  return (
    <Container>
      <Header />
      <main>
        <Section heading="My skillset includes" dataList={skillset} />
        <Section heading="What I want to learn next" dataList={toLearn} />
        <Portfolio />
      </main>
      <Footer />
    </Container>
  );
}

export default PersonalHomepage;
