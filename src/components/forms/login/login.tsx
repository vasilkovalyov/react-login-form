import { useState } from 'react';
import { AxiosError } from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import { Page } from '@/src/constants/pages';
import { apiLogin } from '@/src/api/auth';
import { useAuthApiInfo } from '@/src/hooks/authApiInfo';
import { ApiErrorDetails } from '@/src/types/error-details';
import { getMessageFromDetailError } from '@/src/utils/common';

import { LoginExtendedType } from './login.type';

import LoginSimpleForm from './login-simple';
import LoginExtendedForm from './login-extended';
import { updateUser, useAppDispatch } from '@/src/redux';
import { Status } from '@/src/constants/response-status';
import { LocaleStorageKeys } from '@/src/types/local-storage';

function LoginForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isLoading, errorMessage, setErrorMessage, setIsLoading } =
    useAuthApiInfo();
  const [email, setEmail] = useState<string | null>();

  function onSubmitSimpleForm(email: string) {
    setEmail(email);
  }

  async function onSubmitExtendedForm({ email, password }: LoginExtendedType) {
    try {
      setIsLoading(true);
      const response = await apiLogin(email, password);
      if (response.status === Status.SUCCESS) {
        dispatch(updateUser());
        localStorage.setItem(
          LocaleStorageKeys.ACCESS_TOKEN,
          response.data.access_token
        );
        localStorage.setItem(
          LocaleStorageKeys.REFRESH_TOKEN,
          response.data.refresh_token
        );
        localStorage.setItem(
          LocaleStorageKeys.TOKEN_EXPIRE,
          response.data.token_expire.toString()
        );
        navigate(Page.HOME);
      }
    } catch (e) {
      if (e instanceof AxiosError) {
        const detail: ApiErrorDetails = e.response?.data.detail;
        detail && setErrorMessage(getMessageFromDetailError(detail));
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="auth-form">
      {!email ? (
        <LoginSimpleForm onSubmit={onSubmitSimpleForm} />
      ) : (
        <LoginExtendedForm
          email={email}
          onSubmit={onSubmitExtendedForm}
          isLoading={isLoading}
        />
      )}
      {errorMessage && (
        <p className="auth-form__error-message">{errorMessage}</p>
      )}
      <p className="auth-form__bottom-info">
        Is your company new to Qencode? <Link to={Page.HOME}>Sign up</Link>
      </p>
    </div>
  );
}

export default LoginForm;
