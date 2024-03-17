import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  PageLogin,
  PageAdmin,
  PageForgotPassword,
  PageNotFound,
  PageHome,
} from 'src/pages';
import { Page } from 'src/constants/pages';
import { PublicLayout, PrivateLayout } from 'src/layouts';

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
    path: Page.ADMIN,
    element: <PrivateLayout />,
    children: [
      {
        index: true,
        element: <PageAdmin />,
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
