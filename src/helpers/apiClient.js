import axios from 'axios';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_QUIZ_API_BASE_URL,
  headers: {
    'X-Api-Key': import.meta.env.VITE_QUIZ_API_KEY,
  },
});
