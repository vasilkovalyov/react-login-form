import { Navigate, Outlet } from 'react-router-dom';

import { Page } from '@/src/constants/pages';
import { getAccessTokenFromLS } from '@/src/utils/local-storage';

export default function PrivateLayout() {
  if (!getAccessTokenFromLS()) {
    return <Navigate to={Page.LOGIN} replace={true} />;
  }

  return (
    <div className="private-layout">
      Admin Layout
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
