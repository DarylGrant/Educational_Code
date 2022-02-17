import React from 'react';


const VideoList = ({videos}) => {

    const videoItems = videos.map((video) => {
        return <li key={video.title}><a href={video.url}>{video.title}</a></li>
    })

  return (
      <ul>{videoItems}</ul>
  );
}

export default VideoList;