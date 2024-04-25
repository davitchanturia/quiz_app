export const mixObjects = (obj1, obj2) => {
  const formattedAnswers = [];

  for (const key in obj1) {
    if (obj1.hasOwnProperty(key) && obj1[key] !== null) {
      const label = obj1[key];
      const value = obj2[`${key}_correct`] === 'true';

      formattedAnswers.push({ key, label, value });
    }
  }

  return formattedAnswers;
};
