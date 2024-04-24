import React, { useState } from 'react';

const QuestionsContext = React.createContext({
  questions: [],
  onChangeQuestionsData: () => {},
});

export const QuestionContextProvider = (props) => {
  const [questions, setQuestions] = useState([]);

  const setQuestionsHandler = (questionsArray) => {
    setQuestions(questionsArray);
  };

  return (
    <QuestionsContext.Provider
      value={{
        questions,
        onChangeQuestionsData: setQuestionsHandler,
      }}
    >
      {props.children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsContext;
