import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

type Variant = 'primary' | 'ghost';
type Size = 'md' | 'lg';

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

interface ButtonProps extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> {
  /** Внутренний маршрут — рендерится <Link> */
  to?: string;
  /** Внешняя ссылка — рендерится <a> */
  href?: string;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  href,
  ...rest
}: ButtonProps) => {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();
  const content = <span className="btn__label">{children}</span>;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    // tel: и mailto: должны открываться в текущей вкладке,
    // иначе на десктопе остаётся пустое окно.
    const external = /^https?:/i.test(href);

    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
};

export default Button;
