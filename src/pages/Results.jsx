import { useContext } from 'react';
import ResultsContext from '../store/results';

export const Results = () => {
  const resultCtx = useContext(ResultsContext);

  console.log(resultCtx.result);

  return <div>results page</div>;
};
