import { StyledSection, SectionHeader, SectionList } from "./styled";
import { ListItem } from "./ListItem";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";

const sectionVariants = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: 0.1,
    },
  },
};

const Section = ({ heading, dataList }) => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.9 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <StyledSection
      as={motion.section}
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={animation}
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
