import React from "react";
import LinkList from "../components/LinkList";
import ImageList from "../components/ImageList";
import VideoContainer from "./VideoContainer";

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
