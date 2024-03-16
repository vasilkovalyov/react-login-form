import * as yup from 'yup';
import { passwordRegex } from '@/src/utils/password-validation-schema';

export const newPasswordValidationSchema = yup.object().shape({
  password: yup
    .string()
    .matches(passwordRegex, 'Password must be at least 8 characters long')
    .required('Password is required'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match'),
});
