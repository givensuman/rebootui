import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps, type Size } from './_reboot/types';

type ButtonGroupProps = {
  role?: 'group' | 'toolbar';
  label?: string;
  size?: Size;
  vertical?: boolean;
} & GlobalProps &
  React.HTMLAttributes<HTMLDivElement>;

const ButtonGroup = React.forwardRef(
  (
    {
      as = 'div',
      className,
      role = 'group',
      label,
      size,
      vertical,
      ...props
    }: ButtonGroupProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames(
          {
            'btn-group': !vertical,
            [`btn-group-${size}`]: size,
            'btn-group-vertical': vertical
          },
          className
        )}
        role={role}
        aria-label={label}
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default ButtonGroup;
