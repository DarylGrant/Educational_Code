import React from "react";

const VideoList = ({ videos, handleChange }) => {
  const videoSelectOption = videos.map((video) => {
    return <option key={video.url}>{video.title}</option>;
  });

  return (
    <>
      <select onChange={handleChange}>
        <option>Select Video</option>
        {videoSelectOption}
      </select>
    </>
  );
};

export default VideoList;
