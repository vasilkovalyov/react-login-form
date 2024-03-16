import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IUserStore } from '../types/user';

export interface IUserState {
  user: IUserStore;
  loading: boolean;
  error?: string | null;
  isAuth: boolean;
}

const defaultUserState: IUserStore = {
  email: '',
};

const initialState: IUserState = {
  user: defaultUserState,
  isAuth: false,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    userLoading: (state) => {
      state.error = null;
    },
    updateUser: (state, action: PayloadAction<IUserStore>) => {},
    logoutUser: (state) => {
      state.isAuth = false;
      state.user = defaultUserState;
    },
  },
});

export const { userLoading, updateUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
