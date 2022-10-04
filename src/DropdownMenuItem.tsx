import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type DropdownMenuItemProps = {
  active?: boolean;
  disabled?: boolean;
} & GlobalProps & React.HTMLAttributes<HTMLButtonElement>

const DropdownMenuItem = React.forwardRef(
  (
    {
      as = 'button',
      className,
      ...props
    }: DropdownMenuItemProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames('dropdown-item', {
          'active': props.active,
          'disabled': props.disabled
        }, className)}
        aria-current={props.active}
        aria-disabled={props.disabled}
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default DropdownMenuItem;