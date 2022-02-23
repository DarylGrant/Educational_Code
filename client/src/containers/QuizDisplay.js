import React from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";

const QuizDisplay = ({ topic }) => {
  Survey.StylesManager.applyTheme("darkblue");
  console.log(topic);
  const surveyJSON = topic;

  return (
    <>
      <Survey.Survey json={surveyJSON} /*onComplete={sendDataToServer}*/ />
    </>
  );
};

export default QuizDisplay;
