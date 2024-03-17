import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { updateUser, useAppDispatch } from '@/src/redux';
import { isExpireAccessToken } from '@/src/utils/common';

function PublicLayout() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isExpireAccessToken()) {
      dispatch(updateUser());
    }
  }, []);

  return (
    <main>
      <Outlet />
    </main>
  );
}

export default PublicLayout;
