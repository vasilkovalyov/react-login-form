import { Navigate, Outlet } from 'react-router-dom';

import { Page } from '@/src/constants/pages';
import { isExpireAccessToken } from '@/src/utils/common';

export default function PrivateLayout() {
  if (isExpireAccessToken()) {
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
