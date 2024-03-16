import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  PageLogin,
  PageForgotPassword,
  PageNewPassword,
  PageNotFound,
} from 'src/pages';
import { Page } from '../constants/pages';

const router = createBrowserRouter([
  {
    path: Page.HOME,
    element: <div>home page</div>,
  },
  {
    path: Page.LOGIN,
    element: <div>public layout</div>,
    children: [
      {
        index: true,
        element: <PageLogin />,
      },
    ],
  },
  {
    path: Page.FORGOT_PASSWORD,
    element: <div>publie layout</div>,
    children: [
      {
        index: true,
        element: <PageForgotPassword />,
      },
    ],
  },
  {
    path: Page.NEW_PASSWORD,
    element: <div>private layout</div>,
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
