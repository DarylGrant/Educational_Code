import { useState, useEffect } from "react";
import VideoList from "../components/VideoList";
import Video from "../components/Video";

const VideoContainer = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState({});

  useEffect(() => {});

  const handleChange = (event) => {
    const selectedVideo = videos.find((video) => {
      if (video.name === event.target.value) {
        return video;
      }
      setSelectedVideo(selectedVideo);
    });
  };

  return (
    <>
      <Video selectedVideo={selectedVideo} />
      <VideoList videos={videos} handleChange={handleChange} />
    </>
  );
};

export default VideoContainer;
