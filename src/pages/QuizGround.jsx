import { MainLayout } from '../layouts/MainLayout';
import { useEffect, useContext } from 'react';
import QuestionsContext from '../store/questions';
import { getQuestions } from '../services/QuizApi';

export const QuizGround = () => {
  const questionsCtx = useContext(QuestionsContext);

  useEffect(() => {
    const fetchQuestions = async () => {
      const questionsData = await getQuestions();
      questionsCtx.onChangeQuestionsData(questionsData.data);
    };

    if (questionsCtx.questions.length === 0) {
      fetchQuestions();
    }
  }, []);

  return (
    <MainLayout>
      {questionsCtx.questions.map((q) => (
        <div key={q.id}>{q.question}</div>
      ))}
    </MainLayout>
  );
};
