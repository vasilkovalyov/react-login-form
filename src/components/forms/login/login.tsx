import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

import { Input, Password, Button } from '@/src/components/ui';
import { Page } from '@/src/constants/pages';

import { LoginType } from './login.type';
import { loginValidationSchema } from './login.validation';

function LoginForm() {
  const methods = useForm<LoginType>({
    mode: 'onSubmit',
    resolver: yupResolver(loginValidationSchema),
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
            placeholder="Work email"
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
          <Button variant="fill" fullwidth>
            Log in to Qencode
          </Button>
          <p className="auth-form__bottom-info">
            Is your company new to Qencode? <Link to={Page.HOME}>Sign up</Link>
          </p>
        </form>
      </FormProvider>
    </div>
  );
}

export default LoginForm;
