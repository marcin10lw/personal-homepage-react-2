import { StyledLoading, LoadingMessage, LoadingSpinner } from "./styled";

const Loading = () => {
  return (
    <StyledLoading>
      <LoadingMessage>Please wait, projects are being loaded...</LoadingMessage>
      <LoadingSpinner />
    </StyledLoading>
  );
};

export default Loading;
