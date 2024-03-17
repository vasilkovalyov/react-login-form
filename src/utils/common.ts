import { ApiErrorDetails } from '../types/error-details';
import { LocaleStorageKeys } from '../types/local-storage';
import { getAccessTokenFromLS } from './local-storage';

export function getMessageFromDetailError(detail: ApiErrorDetails): string {
  if (Array.isArray(detail)) {
    return detail[0].error;
  }
  return detail;
}

export function isExpireAccessToken(): boolean {
  if (!getAccessTokenFromLS()) return false;
  const time = localStorage.getItem(LocaleStorageKeys.TOKEN_EXPIRE);
  if (!time) return false;

  return new Date().getTime() > parseFloat(time);
}
