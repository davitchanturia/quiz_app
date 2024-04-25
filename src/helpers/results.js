import { resultsScore } from './enum';

export const calculateResultData = (corrects, incorrects) => {
  const sum = corrects + incorrects;

  const percentage = (corrects / sum) * 100;

  if (percentage < 33) {
    return resultsScore.BAD;
  }
  if (percentage >= 33 && percentage <= 80) {
    return resultsScore.GOOD;
  }
  if (percentage > 80 && percentage <= 100) {
    return resultsScore.BEST;
  }
};
