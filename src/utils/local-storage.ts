import { LocaleStorageKeys } from 'src/types/local-storage';

export const getAccessTokenFromLS = (): string | null => {
  return localStorage.getItem(LocaleStorageKeys.ACCESS_TOKEN);
};

export const getRefreshTokenFromLS = (): string | null => {
  return localStorage.getItem(LocaleStorageKeys.REFRESH_TOKEN);
};
