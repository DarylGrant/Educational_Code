import ReactPlayer from "react-player";

const Video = ({ selectedVideo }) => {
  return (
    <>
      <h1>Videos</h1>
      <h2 style={{ color: "white" }}>{selectedVideo.title} </h2>
      <ReactPlayer
        url={
          "https://www.youtube.com/embed/" +
          selectedVideo.youtube_id +
          "?autoplay=1"
        }
        playing={true}
        muted={true}
        controls={true}
      />
    </>
  );
};

export default Video;
