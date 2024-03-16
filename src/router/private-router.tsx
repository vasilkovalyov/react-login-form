import { Navigate, useLocation } from 'react-router-dom';
import { Page } from '../constants/pages';
import { IRoutesProps } from '../types/router';

function PrivateRoute({
  component: Component,
  redirectUrl = Page.LOGIN,
}: IRoutesProps) {
  const { pathname } = useLocation();
  const isAuth = false;

  return isAuth ? (
    Component
  ) : (
    <Navigate to={redirectUrl} state={pathname} replace />
  );
}

export default PrivateRoute;
