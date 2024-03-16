import { LoginForm } from '@/src/components/forms';
import { AuthLayout } from '@/src/layouts';

export default function LoginPage() {
  return (
    <AuthLayout title="Log in to your account">
      <LoginForm />
    </AuthLayout>
  );
}
