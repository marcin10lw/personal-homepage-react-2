import { StyledSection, SectionHeader, SectionList } from "./styled";
import { ListItem } from "./ListItem";
import { useSelector } from "react-redux";
import { selectisDarkTheme } from "../themeSlice";

const Section = ({ heading, dataList }) => {
  const isDarkTheme = useSelector(selectisDarkTheme);

  return (
    <StyledSection isDarkTheme={isDarkTheme}>
      <SectionHeader isDarkTheme={isDarkTheme}>{heading}</SectionHeader>
      <SectionList>
        {dataList.map((item) => (
          <ListItem key={item} isDarkTheme={isDarkTheme}>
            {item}
          </ListItem>
        ))}
      </SectionList>
    </StyledSection>
  );
};

export default Section;
