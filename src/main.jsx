import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppRouterProvider } from './router/index.jsx';
import { QuestionContextProvider } from './store/questions.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuestionContextProvider>
      <AppRouterProvider />
    </QuestionContextProvider>
  </React.StrictMode>
);
