import { useState } from 'react';
import NewPasswordExtendForm from './new-password-extend';
import NewPasswordSimpleForm from './new-password-simple';

function NewPasswordForm() {
  const [email, setEmail] = useState<string | null>(null);
  const [infoMessage, setInfoMessage] = useState<string | null>(null);

  function onSubmitForgotPassword(email: string, infoMessage: string) {
    setEmail(email);
    setInfoMessage(infoMessage);
  }

  return (
    <div className="auth-form">
      {!email ? (
        <NewPasswordSimpleForm onSubmitForm={onSubmitForgotPassword} />
      ) : (
        <>
          <p className="auth-form__info-message">{infoMessage}</p>
          <NewPasswordExtendForm />
        </>
      )}
    </div>
  );
}

export default NewPasswordForm;
