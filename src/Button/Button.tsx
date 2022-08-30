import React from 'react';
import cn from 'classnames';

export type ButtonProps = {
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link';
  size?: 'lg' | 'sm';
  outlined?: boolean;
  active?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
} & React.HTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant = 'primary',
  outlined,
  size,
  active,
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn('btn', {
        [`btn-${variant}`]: !outlined && variant,
        [`btn-outline-${variant}`]: outlined,
        [`btn-${size}`]: size,
        active: active
      })}
      role="button"
      type={type}
    >
      {props.children}
    </button>
  );
};

export default Button;
