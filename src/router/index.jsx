import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '../pages/Home';
import { QuizGround } from '../pages/QuizGround';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/quiz',
    element: <QuizGround />,
  },
]);

export const AppRouterProvider = () => <RouterProvider router={router} />;
