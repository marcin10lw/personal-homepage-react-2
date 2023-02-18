import { useSelector } from "react-redux";
import { selectDarkTheme } from "../themeSlice";
import { Button } from "../Button";
import { StyledError, ErrorHeader, ErrorIcon, ErrorMessage } from "./styled";

const Error = () => {
  const darkTheme = useSelector(selectDarkTheme);

  return (
    <StyledError darkTheme={darkTheme}>
      <ErrorIcon />
      <ErrorHeader>Ooops! Something went wrong...</ErrorHeader>
      <ErrorMessage>
        Sorry, failed to load Github projects. You can check them directly on
        Github.
      </ErrorMessage>
      <Button
        darkTheme={darkTheme}
        inError
        as="a"
        href="https://github.com/marcin10lw"
        target="_blank"
        rel="noopener noreferrer"
      >
        Go to Github
      </Button>
    </StyledError>
  );
};

export default Error;
