import { ApiErrorDetails } from '../types/error-details';

export function getMessageFromDetailError(detail: ApiErrorDetails): string {
  if (Array.isArray(detail)) {
    return detail[0].error;
  }
  return detail;
}
