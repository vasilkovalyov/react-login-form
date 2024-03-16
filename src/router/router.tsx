import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  PageLogin,
  PageForgotPassword,
  PageNewPassword,
  PageNotFound,
  PageHome,
} from 'src/pages';
import { Page } from '../constants/pages';
import { PublicLayout } from '../layouts';
import PrivateRoute from './private-router';

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
  {
    path: Page.NEW_PASSWORD,
    element: <PrivateRoute component={<PublicLayout />} />,
    children: [
      {
        index: true,
        element: <PageNewPassword />,
      },
    ],
  },

  { path: '*', element: <PageNotFound /> },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
