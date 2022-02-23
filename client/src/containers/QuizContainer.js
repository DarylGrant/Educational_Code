import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import QuizDisplay from "../components/QuizDisplay";
import ErrorPage from "../components/ErrorPage.js";
import "survey-react/survey.css";

const QuizContainer = () => {
  const [quiz, setQuiz] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = () => {
    fetch("http://localhost:5000/api/quiz")
      .then((response) => response.json())
      .then((quizes) => {
        const quiz = quizes.find((qu) => {
          return qu.quizName.toLowerCase() === title;
        });

        setQuiz(quiz);
      });
  };

  if (!quiz) {
    return <ErrorPage />;
  }

  return <QuizDisplay quiz={quiz} />;
};

export default QuizContainer;
