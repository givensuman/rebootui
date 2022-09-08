import React from 'react';
import classnames from 'classnames';
import withProps from '../withProps';

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
} & React.HTMLAttributes<HTMLButtonElement>

const Button = ({
  variant = 'primary',
  outlined,
  size,
  active,
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classnames('btn', {
        [`btn-${variant}`]: !outlined && variant,
        [`btn-outline-${variant}`]: outlined,
        [`btn-${size}`]: size,
        active: active
      })}
      role="button"
      type={type}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default withProps<ButtonProps>(Button);
