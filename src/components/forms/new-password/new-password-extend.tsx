import { AxiosError } from 'axios';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Password, Button } from '@/src/components/ui';
import { apiSetPassword } from '@/src/api/auth';
import { useAuthApiInfo } from '@/src/hooks/authApiInfo';
import { getMessageFromDetailError } from '@/src/utils/common';
import { ApiErrorDetails } from '@/src/types/error-details';

import { NewPasswordType } from './new-password.type';
import { newPasswordValidationSchema } from './new-password.validation';

function NewPasswordExtendForm() {
  const { isLoading, errorMessage, setErrorMessage, setIsLoading } =
    useAuthApiInfo();

  const methods = useForm<NewPasswordType>({
    mode: 'onSubmit',
    resolver: yupResolver(newPasswordValidationSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  async function onSubmit(data: NewPasswordType) {
    try {
      setIsLoading(true);
      const response = await apiSetPassword(
        '',
        '',
        data.password,
        data.confirm_password
      );
      console.log(response);
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
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Password
          {...register('password')}
          id="password"
          name="password"
          placeholder="Password"
          label="Password"
          isVisible={true}
          errorMessage={errors.password?.message}
        />
        <Password
          {...register('confirm_password')}
          id="confirm_password"
          name="confirm_password"
          placeholder="Password"
          label="Confirm Password"
          isVisible={true}
          errorMessage={errors?.confirm_password?.message}
        />
        <Button isLoading={isLoading} variant="fill" fullwidth>
          {isLoading ? 'Loading...' : 'Reset Password'}
        </Button>
        {errorMessage && (
          <p className="auth-form__error-message">{errorMessage}</p>
        )}
      </form>
    </FormProvider>
  );
}

export default NewPasswordExtendForm;
