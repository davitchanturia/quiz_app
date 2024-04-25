import { resultsScore } from './enum';

export const ResultScoreTextMap = {
  [resultsScore.BAD]: (score, sum) =>
    `Your result: ${score} correct out of ${sum}. you need to work harder!`,
  [resultsScore.GOOD]: (score, sum) =>
    `You achieved ${score} correct answers out of ${sum}. Keep improving!`,
  [resultsScore.BEST]: (score, sum) =>
    `Well done! You achieved ${score} out of ${sum}. Congratulations on a perfect score!`,
};
