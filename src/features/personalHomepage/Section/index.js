import { StyledSection, SectionHeader, SectionList } from "./styled";
import { ListItem } from "./ListItem";
import { motion } from "framer-motion";
import useInViewAnimation from "../useInViewAnimation";

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.1,
    },
  },
};

const Section = ({ heading, dataList }) => {
  const { animation, ref } = useInViewAnimation(0.5);

  return (
    <StyledSection
      as={motion.section}
      ref={ref}
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
