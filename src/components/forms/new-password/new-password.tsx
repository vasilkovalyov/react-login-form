import { useState } from 'react';
import NewPasswordExtendForm from './new-password-extend';
import NewPasswordSimpleForm from './new-password-simple';

function NewPasswordForm() {
  const [email, setEmail] = useState<string | null>(null);

  function onSubmitForgotPassword(email: string) {
    setEmail(email);
  }

  return (
    <div className="auth-form">
      {!email ? (
        <NewPasswordSimpleForm onSubmitForm={onSubmitForgotPassword} />
      ) : (
        <NewPasswordExtendForm />
      )}
    </div>
  );
}

export default NewPasswordForm;
