export type LoginSimpleType = {
  email: string;
};

export type LoginExtendedType = {
  email: string;
  password: string;
};

export type LoginSimpleFormProps = {
  onSubmit: (email: string) => void;
};

export type LoginExtendedFormProps = {
  email: string;
  isLoading?: boolean;
  onSubmit: (data: LoginExtendedType) => void;
};
