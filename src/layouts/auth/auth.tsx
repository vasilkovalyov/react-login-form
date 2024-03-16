import cn from 'classnames';

import './auth.scss';

type AuthContainerProps = {
  title?: string;
  children?: React.ReactNode;
  className?: string;
};

function AuthLayout({ children, title, className }: AuthContainerProps) {
  return (
    <section className={cn('auth', className)}>
      <div className="auth__container container">
        <img src="/logo.svg" alt="qencode" className="auth__logo" />
        <h2 className="auth__title">{title}</h2>
        <div className="auth__content">{children}</div>
      </div>
    </section>
  );
}

export default AuthLayout;
