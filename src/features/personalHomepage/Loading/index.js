import { useSelector } from "react-redux";
import { selectDarkTheme } from "../../features/personalHomepage/themeSlice";
import { StyledLoading, LoadingMessage, LoadingSpinner } from "./styled";

const Loading = () => {
  const darkTheme = useSelector(selectDarkTheme);

  return (
    <StyledLoading>
      <LoadingMessage darkTheme={darkTheme}>
        Please wait, projects are being loaded...
      </LoadingMessage>
      <LoadingSpinner />
    </StyledLoading>
  );
};

export default Loading;
