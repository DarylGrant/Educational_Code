import React from "react";

const VideoList = ({ videos, handleChange }) => {
  const videoSelectOption = videos.map((video) => {
    return (
      <option key={video.url} value={video.title}>
        {video.title}
      </option>
    );
  });

  return (
    <div id="video-select">
      <select onChange={handleChange}>
        <option selected={true} disabled={true}>
          Select Video
        </option>
        {videoSelectOption}
      </select>
    </div>
  );
};

export default VideoList;
