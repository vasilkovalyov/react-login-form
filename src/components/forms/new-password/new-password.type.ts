export type NewPasswordType = {
  password: string;
  confirm_password: string;
};

export type NewPasswordSimpleFormProps = {
  onSubmitForm: (email: string, infoMessage: string) => void;
};

export type NewPasswordSimpleType = {
  email: string;
};
