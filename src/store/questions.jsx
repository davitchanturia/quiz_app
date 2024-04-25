import React, { useState } from 'react';

const QuestionsContext = React.createContext({
  questions: [],
  onChangeQuestionsData: () => {},
  quizIsFinished: false,
  setQuizIsFinishedHandler: () => {},
});

export const QuestionContextProvider = (props) => {
  const [questions, setQuestions] = useState([]);
  const [quizIsFinished, setQuizIsFinished] = useState([]);

  const setQuestionsHandler = (questionsArray) => {
    setQuestions(questionsArray);
  };

  const setQuizIsFinishedHandler = (isFinished) => {
    setQuizIsFinished(isFinished);
  };

  return (
    <QuestionsContext.Provider
      value={{
        questions,
        onChangeQuestionsData: setQuestionsHandler,
        quizIsFinished,
        onFinishQuiz: setQuizIsFinishedHandler,
      }}
    >
      {props.children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsContext;
