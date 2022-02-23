import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import QuizDisplay from "./QuizDisplay";
import ErrorPage from "../components/ErrorPage";

const QuizContainer = () => {
  const [topic, setTopic] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    fetchTopic();
  }, []);

  const fetchTopic = () => {
    fetch("http://localhost:5000/api/quiz")
      .then((response) => response.json())
      .then((topics) => {
        const foundTopic = topics.find((t) => {
          return t.quizName.toLowerCase() === title;
        });

        setTopic(foundTopic);
      });
  };

  if (!topic) {
    return <ErrorPage />;
  }

  return <QuizDisplay topic={topic} />;
};

export default QuizContainer;
