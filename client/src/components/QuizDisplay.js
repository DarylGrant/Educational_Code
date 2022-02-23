import React from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";

const QuizDisplay = ({ quiz }) => {
  Survey.StylesManager.applyTheme("darkblue");

  const surveyJSON = quiz;

  return (
    <>
      <Survey.Survey json={surveyJSON} /*onComplete={sendDataToServer}*/ />
    </>
  );
};

export default QuizDisplay;
