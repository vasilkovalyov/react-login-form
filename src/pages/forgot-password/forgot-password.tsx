import { useState } from 'react';
import { ForgotPasswordForm, NewPasswordForm } from '@/src/components/forms';
import { AuthLayout } from '@/src/layouts';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState<string | null>(null);

  function onSubmitForgotPassword(email: string) {
    setEmail(email);
  }

  return (
    <AuthLayout title="Forgot Password?">
      {!email ? (
        <ForgotPasswordForm onSubmitForm={onSubmitForgotPassword} />
      ) : (
        <NewPasswordForm email={email} />
      )}
    </AuthLayout>
  );
}
