import React from "react";
//import ReactPlayer from "react-player/youtube";
import ReactPlayer from "react-player";
import Container from "../../../components/Container";
import styled from "styled-components";
import "./HomeVideo.css";

const Inner = styled(Container.Inner)`
  max-width: 1000px;

  @media all and (max-width: 1200px) {
    padding: 0 32px;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
`;

const HomeVideo = () => {
  const [playing, setPlaying] = React.useState(false);
  return (
    <Inner>
      <VideoWrapper>
        <ReactPlayer
          width="100%"
          height="100%"
          className="react-player"
          //url="https://www.youtube.com/watch?v=dpfYO2KT0Yg&ab_channel=KOMPASTV"
          url='videos/video1.mp4' 
          controls
          playing={playing}
        />
      </VideoWrapper>
    </Inner>
  );
};

export default HomeVideo;
