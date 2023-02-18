import { Button } from "../Button";
import { StyledError, ErrorHeader, ErrorIcon, ErrorMessage } from "./styled";

const Error = () => {
  return (
    <StyledError>
      <ErrorIcon />
      <ErrorHeader>Ooops! Something went wrong...</ErrorHeader>
      <ErrorMessage>
        Sorry, failed to load Github projects. You can check them directly on
        Github.
      </ErrorMessage>
      <Button
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
