import { apiClient } from '../helpers/apiClient';

export const getAllCategories = async () => {
  return await apiClient.get('categories');
};

export const getAllTags = async () => {
  return await apiClient.get('tags');
};

export const getQuestions = async (filterParameters = {}) => {
  return await apiClient.get('questions', {
    params: filterParameters,
  });
};
