import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import EducationalDescription from "./EducationalDescription";
import ErrorPage from "../components/ErrorPage";

const EducationalContainer = ({ topicID }) => {
  const [topic, setTopic] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    fetchTopic();
  }, []);

  const fetchTopic = () => {
    fetch("http://localhost:5000/api/topics")
      .then((response) => response.json())
      .then((topics) => {
        const foundTopic = topics.find((t) => {
          return t.title.toLowerCase() === title;
        });

        setTopic(foundTopic);
      });
  };

  if (!topic) {
    return <ErrorPage />;
  }

  return <EducationalDescription topic={topic} />;
};

export default EducationalContainer;
