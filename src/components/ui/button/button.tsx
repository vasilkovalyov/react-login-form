import cn from 'classnames';
import { ButtonProps } from './button.types';

import './button.scss';

const Button = ({
  isLoading = false,
  className,
  variant,
  children,
  fullwidth,
  disabled,
  ...props
}: ButtonProps) => {
  const cnVariant = cn({
    'button--fill': variant === 'fill',
    'button--outline': variant === 'outline',
  });

  const classname = cn(
    'button',
    {
      'button--loading': isLoading,
      'button--fullwidth': fullwidth,
    },
    cnVariant,
    className
  );

  return (
    <button
      {...(disabled && { disabled: true })}
      className={classname}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
