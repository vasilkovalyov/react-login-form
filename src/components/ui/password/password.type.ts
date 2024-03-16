import { InputHTMLAttributes } from 'react';

export type PasswordProps = {
  id: string;
  className?: string;
  label?: string;
  name: string;
  helperLink?: {
    text: string;
    href: string;
  };
  errorMessage?: string;
  infoLink?: {
    text: string;
    path: string;
  };
} & Partial<InputHTMLAttributes<HTMLInputElement>>;
