import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input, Password, Button } from '@/src/components/ui';
import { Page } from '@/src/constants/pages';

import { LoginExtendedType, LoginExtendedFormProps } from './login.type';
import { loginExtendedValidationSchema } from './login.validation';

function LoginExtendedForm({
  email,
  isLoading,
  onSubmit,
}: LoginExtendedFormProps) {
  const methods = useForm<LoginExtendedType>({
    mode: 'onSubmit',
    resolver: yupResolver(loginExtendedValidationSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  function onSubmitForm(data: LoginExtendedType) {
    onSubmit({ ...data });
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Input
          {...register('email')}
          id="email"
          name="email"
          placeholder="Work email"
          defaultValue={email}
          errorMessage={errors?.email?.message}
        />
        <Password
          {...register('password')}
          id="password"
          name="password"
          placeholder="Password"
          errorMessage={errors?.password?.message}
          infoLink={{
            path: Page.FORGOT_PASSWORD,
            text: 'Forgot your password?',
          }}
        />
        <Button isLoading={isLoading} variant="fill" fullwidth>
          {isLoading ? 'Loading...' : 'Log in to Qencode'}
        </Button>
      </form>
    </FormProvider>
  );
}

export default LoginExtendedForm;
