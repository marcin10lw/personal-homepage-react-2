import { useSelector } from "react-redux";
import { selectisDarkTheme } from "../themeSlice";
import { StyledLoading, LoadingMessage, LoadingSpinner } from "./styled";

const Loading = () => {
  const isDarkTheme = useSelector(selectisDarkTheme);

  return (
    <StyledLoading>
      <LoadingMessage isDarkTheme={isDarkTheme}>
        Please wait, projects are being loaded...
      </LoadingMessage>
      <LoadingSpinner />
    </StyledLoading>
  );
};

export default Loading;
