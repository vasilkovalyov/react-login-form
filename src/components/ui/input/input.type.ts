import { InputHTMLAttributes } from 'react';

export type InputProps = {
  id: string;
  className?: string;
  label?: string;
  name: string;
  errorMessage?: string;
} & Partial<InputHTMLAttributes<HTMLInputElement>>;
