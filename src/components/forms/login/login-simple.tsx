import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input, Button } from '@/src/components/ui';

import { LoginSimpleType, LoginSimpleFormProps } from './login.type';
import { loginSimpleValidationSchema } from './login.validation';

function LoginSimpleForm({ onSubmit }: LoginSimpleFormProps) {
  const methods = useForm<LoginSimpleType>({
    mode: 'onSubmit',
    resolver: yupResolver(loginSimpleValidationSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  function onSubmitForm(data: LoginSimpleType) {
    onSubmit(data.email);
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Input
          {...register('email')}
          id="email"
          name="email"
          placeholder="Work email"
          errorMessage={errors?.email?.message}
        />
        <Button variant="fill" fullwidth>
          Log in to Qencode
        </Button>
      </form>
    </FormProvider>
  );
}

export default LoginSimpleForm;
