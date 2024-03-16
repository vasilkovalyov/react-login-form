import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Password, Button } from '@/src/components/ui';
import { newPasswordValidationSchema } from './new-password.validation';

function NewPasswordForm() {
  const methods = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(newPasswordValidationSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="auth-form">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Password
            {...register('password')}
            id="password"
            name="password"
            placeholder="Password"
            label="Password"
            isVisible={true}
            errorMessage={errors?.password?.message}
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
          <Button variant="fill" fullwidth>
            Reset Password
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}

export default NewPasswordForm;
