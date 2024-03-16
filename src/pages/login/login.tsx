import { LoginForm } from '@/src/components/forms';
import { Button, Icon, IconEnum } from '@/src/components/ui';
import { AuthLayout } from '@/src/layouts';

import googleIcon from 'src/assets/google.svg';

import './login.scss';

export default function LoginPage() {
  return (
    <AuthLayout title="Log in to your account">
      <div className="auth-buttons">
        <Button variant="outline">
          <img src={googleIcon} width={18} height={18} />
          Google
        </Button>
        <Button variant="outline">
          <Icon icon={IconEnum.Github} width={18} height={18} />
          Github
        </Button>
      </div>
      <div className="devider">or</div>
      <LoginForm />
    </AuthLayout>
  );
}
