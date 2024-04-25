import { MainLayout } from '../layouts/MainLayout';
import { useEffect, useContext, useState } from 'react';
import QuestionsContext from '../store/questions';
import { Question } from '../components/Question';
import { useNavigate } from 'react-router-dom';
import ResultsContext from '../store/results';
import { answer } from '../helpers/enum';

export const QuizGround = () => {
  const questionsCtx = useContext(QuestionsContext);

  const resultCtx = useContext(ResultsContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (questionsCtx.questions.length === 0) {
      navigate('/');
    }
  }, []);

  const [step, setStep] = useState(0);

  const nextStepHandler = (isAnswerCorrect) => {
    if (questionsCtx.questions.length === step) {
      navigate('/results');
      return;
    }

    if (isAnswerCorrect === answer.CORRECT)
      resultCtx.onChangeResult(answer.CORRECT);
    if (isAnswerCorrect === answer.INCORRECT)
      resultCtx.onChangeResult(answer.INCORRECT);

    setStep((prevVal) => prevVal + 1);
  };

  const currentQuestion =
    questionsCtx.questions.length !== 0 && questionsCtx.questions.length > step
      ? questionsCtx.questions[step]
      : {};

  return (
    <MainLayout>
      <div className="w-full max-w-7xl mx-auto mt-10 text-lg text-black">
        {questionsCtx.questions.length !== 0 && (
          <Question item={currentQuestion} onNextStep={nextStepHandler} />
        )}
      </div>
    </MainLayout>
  );
};
