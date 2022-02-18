import { useState, useEffect } from "react";
import VideoList from "../components/VideoList";
import Video from "../components/Video";

const VideoContainer = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState({});

  console.log(videos);

  useEffect(() => {}, []);

  const handleChange = (event) => {
    const selectedVideo = videos.find(
      (video) => video.title === event.target.value
    );
    setSelectedVideo(selectedVideo);
  };

  return (
    <>
      {videos && <Video selectedVideo={selectedVideo} />}
      <VideoList videos={videos} handleChange={handleChange} />
    </>
  );
};

export default VideoContainer;
