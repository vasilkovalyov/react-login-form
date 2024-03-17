import { createSlice } from '@reduxjs/toolkit';

import { LocaleStorageKeys } from '@/src/types/local-storage';

export interface IUserState {
  loading: boolean;
  error?: string | null;
  isAuth: boolean;
}

const initialState: IUserState = {
  isAuth: false,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    updateUser: (state) => {
      state.isAuth = true;
    },
    logoutUser: (state) => {
      state.isAuth = false;
      localStorage.removeItem(LocaleStorageKeys.ACCESS_TOKEN);
      localStorage.removeItem(LocaleStorageKeys.REFRESH_TOKEN);
      localStorage.removeItem(LocaleStorageKeys.TOKEN_EXPIRE);
    },
  },
});

export const { updateUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
