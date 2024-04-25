import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppRouterProvider } from './router/index.jsx';
import { QuestionContextProvider } from './store/questions.jsx';
import { ResultsContextProvider } from './store/results.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuestionContextProvider>
      <ResultsContextProvider>
        <AppRouterProvider />
      </ResultsContextProvider>
    </QuestionContextProvider>
  </React.StrictMode>
);
