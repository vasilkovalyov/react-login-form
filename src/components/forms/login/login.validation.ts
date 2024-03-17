import * as yup from 'yup';
import { passwordRegex } from '@/src/utils/password-validation-schema';
import { validation } from '@/src/constants/validation-message';

export const loginSimpleValidationSchema = yup.object().shape({
  email: yup.string().email().required(validation.emailInvalid),
});

export const loginExtendedValidationSchema = yup.object().shape({
  email: yup.string().email().required(validation.emailInvalid),
  password: yup
    .string()
    .matches(passwordRegex, validation.passwordValidMessage)
    .required(validation.passwordInvalid),
});
