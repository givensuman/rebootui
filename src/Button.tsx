import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps, type Variant, type Size } from './_reboot/types';

export type ButtonProps = {
  variant?: Variant | 'link';
  outlined?: boolean;
  size?: Size;
  disabled?: boolean;
  active?: boolean;
} & GlobalProps &
  React.HTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef(
  (
    {
      as = 'button',
      className,
      variant = 'primary',
      outlined,
      size,
      // props.disabled
      // props.active
      ...props
    }: ButtonProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames(
          'btn',
          {
            [`btn-${variant}`]: variant && !outlined,
            [`btn-outline-${variant}`]: outlined,
            [`btn-${size}`]: size,
            disabled: props.disabled,
            active: props.active
          },
          className
        )}
        aria-disabled={props.disabled}
        role="button"
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default Button;
