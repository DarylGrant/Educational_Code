import React from "react";
import LinkList from "./LinkList";
import ImageList from "./ImageList";
import VideoContainer from "../containers/VideoContainer";

const EducationalDescription = ({ topic }) => {
  return (
    <>
      <h2>{topic.title}</h2>
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>
      {topic.links && <LinkList links={topic.links} />}
      <h4>Examples</h4>
      <p>{topic.examples}</p>
      {topic.image && <ImageList images={topic.image} />}
      {topic.video && <VideoContainer videos={topic.video} />}
    </>
  );
};

export default EducationalDescription;
