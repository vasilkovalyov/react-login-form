import * as yup from 'yup';
import { passwordRegex } from '@/src/utils/password-validation-schema';
import { validation } from '@/src/constants/validation-message';

export const newPasswordValidationSchema = yup.object().shape({
  password: yup
    .string()
    .matches(passwordRegex, validation.passwordValidMessage)
    .required(validation.passwordInvalid),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password')], validation.confirmPasswordMatchInvalid)
    .required(validation.confirmPasswordInvalid),
});

export const emailValidationSchema = yup.object().shape({
  email: yup.string().email().required(validation.emailInvalid),
});
