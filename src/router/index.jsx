import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '../pages/Home';
import { QuizGround } from '../pages/QuizGround';
import { Results } from '../pages/Results';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/quiz',
    element: <QuizGround />,
  },
  {
    path: '/results',
    element: <Results />,
  },
]);

export const AppRouterProvider = () => <RouterProvider router={router} />;
