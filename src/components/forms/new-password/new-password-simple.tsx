import { AxiosError } from 'axios';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input, Button } from '@/src/components/ui';
import { apiResetPassword } from '@/src/api/auth';
import { Page } from '@/src/constants/pages';
import { useAuthApiInfo } from '@/src/hooks/authApiInfo';
import { ApiErrorDetails } from '@/src/types/error-details';
import { getMessageFromDetailError } from '@/src/utils/common';
import { emailValidationSchema } from './new-password.validation';

import {
  NewPasswordSimpleType,
  NewPasswordSimpleFormProps,
} from './new-password.type';

function NewPasswordSimpleForm({ onSubmitForm }: NewPasswordSimpleFormProps) {
  const { isLoading, errorMessage, setErrorMessage, setIsLoading } =
    useAuthApiInfo();

  const methods = useForm<NewPasswordSimpleType>({
    mode: 'onSubmit',
    resolver: yupResolver(emailValidationSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  async function onSubmit(data: NewPasswordSimpleType) {
    try {
      setIsLoading(true);
      const response = await apiResetPassword(data.email);
      console.log(response);
      onSubmitForm(data.email);
    } catch (e) {
      if (e instanceof AxiosError) {
        const detail: ApiErrorDetails = e.response?.data.detail;
        detail && setErrorMessage(getMessageFromDetailError(detail));
      }
    } finally {
      setIsLoading(true);
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('email')}
          id="email"
          name="email"
          placeholder="Enter your email"
          errorMessage={errors?.email?.message}
        />
        <Button isLoading={isLoading} variant="fill" fullwidth>
          {isLoading ? 'Loading...' : 'Send'}
        </Button>
        <Button href={Page.LOGIN} variant="outline" fullwidth>
          Cancel
        </Button>
        {errorMessage && (
          <p className="auth-form__error-message">{errorMessage}</p>
        )}
      </form>
    </FormProvider>
  );
}

export default NewPasswordSimpleForm;
