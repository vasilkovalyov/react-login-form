import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { updateUser, useAppDispatch } from '@/src/redux';
import { getAccessTokenFromLS } from '@/src/utils/local-storage';

function PublicLayout() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (getAccessTokenFromLS()) {
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
