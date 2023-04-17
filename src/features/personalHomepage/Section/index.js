import { StyledSection, SectionHeader, SectionList } from "./styled";
import { ListItem } from "./ListItem";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Section = ({ heading, dataList }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <StyledSection
      ref={sectionRef}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <SectionHeader>{heading}</SectionHeader>
      <SectionList>
        {dataList.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </SectionList>
    </StyledSection>
  );
};

export default Section;
