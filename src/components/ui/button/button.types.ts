import { ButtonHTMLAttributes } from 'react';

type InputVariant = 'fill' | 'outline';

export type ButtonProps = {
  className?: string;
  variant?: InputVariant;
  isLoading?: boolean;
  children?: React.ReactNode;
  fullwidth?: boolean;
} & Partial<ButtonHTMLAttributes<HTMLButtonElement>>;
