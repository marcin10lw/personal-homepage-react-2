import { StyledVideo } from "./styled";

const Video = () => {
  return (
    <StyledVideo
      src="https://www.youtube.com/embed/WVGFDe4bCTo"
      title="Marcin Augun"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></StyledVideo>
  );
};

export default Video;
