import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  PageLogin,
  PageForgotPassword,
  PageNotFound,
  PageHome,
} from 'src/pages';
import { Page } from '../constants/pages';
import { PublicLayout } from '../layouts';

const router = createBrowserRouter([
  {
    path: Page.HOME,
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <PageHome />,
      },
    ],
  },
  {
    path: Page.LOGIN,
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <PageLogin />,
      },
    ],
  },
  {
    path: Page.FORGOT_PASSWORD,
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <PageForgotPassword />,
      },
    ],
  },
  { path: '*', element: <PageNotFound /> },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
