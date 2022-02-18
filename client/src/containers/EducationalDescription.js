import React from "react";
import LinkList from "../components/LinkList";
import ImageList from "../components/ImageList";
import VideoContainer from "./VideoContainer";
import "./EducationalDescription.css";

const EducationalDescription = ({ topic }) => {
  return (
    <div id="description-container">
      <header id="heading">
        <h2>{topic.title}</h2>
        <h3>{topic.name}</h3>
      </header>
      <main id="content">
        <p>{topic.description}</p>
      </main>
      <section id="media">
        {topic.image && <ImageList images={topic.image} />}
        {topic.video && <VideoContainer videos={topic.video} />}
      </section>

      <aside id="links">
        {topic.links && <LinkList links={topic.links} />}
      </aside>
      <footer id="footing">
        <h4>Examples</h4>
        <p>{topic.examples}</p>
      </footer>
    </div>
  );
};

export default EducationalDescription;
