import { MainLayout } from '../layouts/MainLayout';
import { useEffect, useContext, useState } from 'react';
import QuestionsContext from '../store/questions';
import { Question } from '../components/Question';
import { useNavigate } from 'react-router-dom';

export const QuizGround = () => {
  const questionsCtx = useContext(QuestionsContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (questionsCtx.questions.length === 0) {
      navigate('/');
    }
  }, []);

  const [step, setStep] = useState(0);

  const nextStepHandler = () => {
    if (questionsCtx.questions.length === step) {
      navigate('/results');
      return;
    }

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
