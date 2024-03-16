import { forwardRef } from 'react';
import cn from 'classnames';
import { useFormContext } from 'react-hook-form';
import { InputProps } from './input.type';

import './input.scss';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, type, errorMessage, ...props }, ref) => {
    const { register } = useFormContext();

    const { name, label, ...rest } = props;

    return (
      <label className={cn('input-box', { 'input-box--error': errorMessage })}>
        {label && <p className="input-box__label-text">{label}</p>}
        <div className="input-box__inner">
          <input
            {...register(name)}
            ref={ref}
            type={type}
            className="input-box__field"
            {...rest}
          />
        </div>
        {errorMessage && (
          <p className="input-box__error-message">{errorMessage}</p>
        )}
      </label>
    );
  }
);

export default Input;
