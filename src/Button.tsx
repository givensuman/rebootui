import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps, type Variant, type Size } from './_reboot/types';

type ButtonProps = {
  variant?: Variant | 'link';
  type?: 'button' | 'submit' | 'reset';
  outlined?: boolean;
  size?: Size;
  disabled?: boolean;
  active?: boolean;
} & GlobalProps &
  React.HTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef(
  (
    {
      variant = 'primary',
      type = 'button',
      outlined,
      size,
      disabled,
      active,

      ...props
    }: ButtonProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as="button"
        className={classnames('btn', {
          [`btn-${variant}`]: variant && !outlined,
          [`btn-outline-${variant}`]: outlined,
          [`btn-${size}`]: size,
          disabled: disabled,
          active: active
        })}
        type={type}
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default Button;
