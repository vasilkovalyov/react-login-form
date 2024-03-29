import { NewPasswordForm } from 'src/components/forms';
import { AuthLayout } from 'src/layouts';

export default function ForgotPasswordPage() {
  return (
    <AuthLayout title="Forgot Password?">
      <NewPasswordForm />
    </AuthLayout>
  );
}
