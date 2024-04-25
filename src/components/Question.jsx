import { useEffect, useMemo, useState } from 'react';
import { mixObjects } from '../helpers/utils';
import { Card } from '@mui/material';

export const Question = ({ item, onNextStep }) => {
  const [correctAnswers, setCorrectAnswers] = useState([]);

  const [showAllAnswers, setShowAllAnswers] = useState(false);
  const [buttonIsDisabled, setButtonIsDisabled] = useState(false);

  const answers = useMemo(
    () => mixObjects(item?.answers, item?.correct_answers),
    [item]
  );

  const checkAnswerHandler = (item) => {
    if (buttonIsDisabled === true) return;

    if (item?.value == false) {
      setShowAllAnswers(true);
      setButtonIsDisabled(true);

      setTimeout(() => {
        onNextStep('INCORRECT');
        clearStateValues();
      }, 300);
      return;
    }

    setCorrectAnswers((oldArray) => [...oldArray, item]);

    const filteredCorrectAnswers = answers.filter((a) => a.value === true);

    if (filteredCorrectAnswers.length === correctAnswers.length) {
      setButtonIsDisabled(true);
    }
  };

  const markAsGreen = (item) => {
    if (showAllAnswers === true)
      return item?.value === true ? '!bg-green-200' : '!bg-red-200';

    const result = correctAnswers.find(
      (el) => el.value === true && el.key === item.key
    );

    if (!!result == false) return;

    return '!bg-green-200';
  };

  useEffect(() => {
    const filteredCorrectAnswers = answers.filter((a) => a.value === true);

    if (filteredCorrectAnswers.length === correctAnswers.length) {
      //emit next step
      setTimeout(() => {
        onNextStep('CORRECT');
        clearStateValues();
      }, 300);
    }
  }, [correctAnswers, answers, onNextStep]);

  const clearStateValues = () => {
    setCorrectAnswers([]);
    setShowAllAnswers(false);
    setButtonIsDisabled(false);
  };

  return (
    <div className="w-full">
      <div className="text-center">{item?.question}</div>

      <div className="flex flex-col !justify-center !items-center w-2/5 mx-auto gap-4  mt-8 ">
        {answers.map((item, index) => (
          <Card
            onClick={checkAnswerHandler.bind(undefined, item)}
            key={index}
            variant="outlined"
            className={`!px-8 !py-1 !min-w-70 !max-w-[400px] !text-center !cursor-pointer !w-full ${markAsGreen(
              item
            )}`}
          >
            {item?.label}
          </Card>
        ))}
      </div>
    </div>
  );
};
