import React, { useReducer } from 'react';
import { answer } from '../helpers/enum';

const ResultsContext = React.createContext({
  result: {},
  onChangeResult: () => {},
  onClearResults: () => {},
});

const initialValue = {
  correct: 0,
  incorrect: 0,
};

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

      case null:
        return initialValue;

      default:
        return state;
    }
  };

  const [result, dispatch] = useReducer(updateResults, initialValue);

  const onChangeResult = (answerType) => {
    if (answerType === answer.CORRECT) dispatch({ type: answer.CORRECT });
    if (answerType === answer.INCORRECT) dispatch({ type: answer.INCORRECT });
  };

  const onClearResults = () => {
    dispatch({ type: null });
  };

  return (
    <ResultsContext.Provider
      value={{
        result,
        onChangeResult,
        onClearResults,
      }}
    >
      {props.children}
    </ResultsContext.Provider>
  );
};

export default ResultsContext;
