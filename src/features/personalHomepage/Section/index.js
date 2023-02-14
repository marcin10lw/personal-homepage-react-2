import { StyledSection, SectionHeader, SectionList } from "./styled";
import { ListItem } from "./ListItem";
import { useSelector } from "react-redux";
import { selectDarkTheme } from "../themeSlice";

const Section = ({ heading, dataList }) => {
  const darkTheme = useSelector(selectDarkTheme);

  return (
    <StyledSection darkTheme={darkTheme}>
      <SectionHeader darkTheme={darkTheme}>{heading}</SectionHeader>
      <SectionList>
        {dataList.map((item) => (
          <ListItem key={item} darkTheme={darkTheme}>
            {item}
          </ListItem>
        ))}
      </SectionList>
    </StyledSection>
  );
};

export default Section;
