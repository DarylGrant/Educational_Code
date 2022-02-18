import ReactPlayer from "react-player";

const Video = ({ selectedVideo }) => {
  return (
    <div>
      <h1>Enhance Your Learning</h1>
      <h2 style={{ color: "blue" }}>{selectedVideo.title} </h2>
      <div id="video-container">
        <ReactPlayer
          url={
            "https://www.youtube.com/embed/" +
            selectedVideo.youtube_id +
            "?autoplay=1"
          }
          className="react-player"
          playing={true}
          muted={true}
          controls={true}
        />
      </div>
    </div>
  );
};

export default Video;
