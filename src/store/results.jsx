import React, { useReducer } from 'react';

const ResultsContext = React.createContext({
  result: {},
  onChangeResult: () => {},
});

export const ResultsContextProvider = (props) => {
  const updateResults = (state, action) => {
    switch (action.type) {
      case 'CORRECT':
        return {
          ...state,
          correct: state.correct + 1,
        };

      case 'INCORRECT':
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
    if (answerType === 'CORRECT') dispatch({ type: 'CORRECT' });
    if (answerType === 'INCORRECT') dispatch({ type: 'INCORRECT' });
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
