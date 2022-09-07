/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import classnames, { type Props } from '../_reboot/manageClassNames';
import { jsx } from '@emotion/react';

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
} & React.HTMLAttributes<HTMLButtonElement> &
  Props;

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
      className={classnames(props, 'btn', {
        [`btn-${variant}`]: !outlined && variant,
        [`btn-outline-${variant}`]: outlined,
        [`btn-${size}`]: size,
        active: active
      })}
      role="button"
      type={type}
      css={props.css}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
