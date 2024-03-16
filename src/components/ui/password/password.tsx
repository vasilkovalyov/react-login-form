import { forwardRef, useState } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';
import { PasswordProps } from './password.type';
import { Button } from '../button';

import { Icon, IconEnum } from '../icon';

import './password.scss';

const Password = forwardRef<HTMLInputElement, PasswordProps>(
  (
    { id, type, value, errorMessage, infoLink, isVisible = false, ...props },
    ref
  ) => {
    const { name, label, ...rest } = props;
    const { register } = useFormContext();

    const [isVisiblePassword, setIsVisiblePassword] =
      useState<boolean>(isVisible);

    return (
      <label className={cn('input-box', { 'input-box--error': errorMessage })}>
        {label && <p className="input-box__label-text">{label}</p>}
        <div className="input-box__inner">
          <input
            {...register(name)}
            ref={ref}
            type={isVisiblePassword ? 'text' : 'password'}
            className="input-box__field input-box__field--password"
            {...rest}
          />
          <Button
            type="button"
            className="input-box__password-toggle"
            onClick={() => setIsVisiblePassword(!isVisiblePassword)}
          >
            <Icon
              icon={isVisiblePassword ? IconEnum.Eye : IconEnum.Eye_Off}
              size={20}
            />
          </Button>
        </div>
        {errorMessage && (
          <p className="input-box__error-message">{errorMessage}</p>
        )}
        {infoLink && (
          <div className="input-box__info-container">
            <Link to={infoLink.path} className="input-box__link">
              {infoLink.text}
            </Link>
          </div>
        )}
      </label>
    );
  }
);

export default Password;
