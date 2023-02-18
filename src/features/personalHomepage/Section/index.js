import { StyledSection, SectionHeader, SectionList } from "./styled";
import { ListItem } from "./ListItem";

const Section = ({ heading, dataList }) => {
  return (
    <StyledSection>
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
