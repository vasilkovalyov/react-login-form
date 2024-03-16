import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input, Button } from '@/src/components/ui';
import { Page } from '@/src/constants/pages';
import { forgotPasswordValidationSchema } from './forgot-password.validation';

function ForgotPasswordForm() {
  const methods = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(forgotPasswordValidationSchema),
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
          <Button href={Page.LOGIN} variant="outline" fullwidth>
            Cancel
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}

export default ForgotPasswordForm;
