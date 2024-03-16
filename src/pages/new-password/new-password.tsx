import { NewPasswordForm } from '@/src/components/forms';
import { AuthLayout } from '@/src/layouts';

export default function NewPasswordPage() {
  return (
    <AuthLayout title="Create new Password?">
      <NewPasswordForm />
    </AuthLayout>
  );
}
