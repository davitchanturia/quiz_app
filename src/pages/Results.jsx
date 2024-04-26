import { useContext, useEffect, useMemo } from 'react';
import ResultsContext from '../store/results';
import { MainLayout } from '../layouts/MainLayout';
import { calculateResultData } from '../helpers/results';
import { ResultScoreTextMap } from '../helpers/map';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@mui/material';

export const Results = () => {
  const resultCtx = useContext(ResultsContext);

  const navigate = useNavigate();

  const sum = useMemo(
    () => resultCtx.result.correct + resultCtx.result.incorrect,
    [resultCtx.result]
  );

  useEffect(() => {
    if (sum === 0) {
      navigate('/');
    }
  }, [sum, navigate]);

  const score = calculateResultData(
    resultCtx.result.correct,
    resultCtx.result.incorrect
  );

  const text = ResultScoreTextMap[score]?.(resultCtx.result.correct, sum);

  const resetResults = () => {
    resultCtx.onClearResults();
  };

  return (
    <MainLayout>
      <div className="w-full max-w-7xl mx-auto mt-10 text-black text-center text-xl">
        <div>{text}</div>

        <Link to="/">
          <Button className="!mt-8 !capitalize" onClick={resetResults}>
            Go to main page
          </Button>
        </Link>
      </div>
    </MainLayout>
  );
};
