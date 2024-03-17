import { AxiosError } from 'axios';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input, Button } from '@/src/components/ui';
import { apiResetPassword } from '@/src/api/auth';
import { Page } from '@/src/constants/pages';
import { useAuthApiInfo } from '@/src/hooks/authApiInfo';

import { forgotPasswordValidationSchema } from './forgot-password.validation';
import {
  ForgotPasswordFormProps,
  ForgotPasswordType,
} from './forgot-password.type';

function ForgotPasswordForm({ onSubmitForm }: ForgotPasswordFormProps) {
  const { isLoading, errorMessage, setErrorMessage, setIsLoading } =
    useAuthApiInfo();

  const methods = useForm<ForgotPasswordType>({
    mode: 'onSubmit',
    resolver: yupResolver(forgotPasswordValidationSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  async function onSubmit(data: ForgotPasswordType) {
    try {
      setIsLoading(true);
      const response = await apiResetPassword(data.email);
      onSubmitForm(data.email);
    } catch (e) {
      if (e instanceof AxiosError) {
        setErrorMessage(e.response?.data.detail);
      }
    } finally {
      setIsLoading(true);
    }
  }

  return (
    <div className="auth-form">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('email')}
            id="email"
            name="email"
            placeholder="Enter your email"
            errorMessage={errors?.email?.message}
          />
          <Button variant="fill" fullwidth>
            Send
          </Button>
          <Button
            isLoading={isLoading}
            href={Page.LOGIN}
            variant="outline"
            fullwidth
          >
            Cancel
          </Button>
          {errorMessage && (
            <p className="auth-form__error-message">{errorMessage}</p>
          )}
        </form>
      </FormProvider>
    </div>
  );
}

export default ForgotPasswordForm;
