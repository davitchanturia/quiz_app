import React, { useReducer } from 'react';
import { answer } from '../helpers/enum';

const ResultsContext = React.createContext({
  result: {},
  onChangeResult: () => {},
});

export const ResultsContextProvider = (props) => {
  const updateResults = (state, action) => {
    switch (action.type) {
      case answer.CORRECT:
        return {
          ...state,
          correct: state.correct + 1,
        };

      case answer.INCORRECT:
        return {
          ...state,
          incorrect: state.incorrect + 1,
        };

      default:
        return state;
    }
  };

  const [result, dispatch] = useReducer(updateResults, {
    correct: 0,
    incorrect: 0,
  });

  const onChangeResult = (answerType) => {
    if (answerType === answer.CORRECT) dispatch({ type: answer.CORRECT });
    if (answerType === answer.INCORRECT) dispatch({ type: answer.INCORRECT });
  };

  return (
    <ResultsContext.Provider
      value={{
        result,
        onChangeResult,
      }}
    >
      {props.children}
    </ResultsContext.Provider>
  );
};

export default ResultsContext;
