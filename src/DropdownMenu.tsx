import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps, type Breakpoints } from './_reboot/types';
import joinPropArray from './_reboot/joinPropArray';

type DropdownAlignment =
  | 'start'
  | 'end'
  | `${Breakpoints}-start`
  | `${Breakpoints}-end`;

type DropdownMenuProps = {
  dark?: boolean;
  align?: DropdownAlignment | DropdownAlignment[];
} & GlobalProps &
  React.HTMLAttributes<HTMLDivElement>;

const DropdownMenu = React.forwardRef(
  (
    { as = 'div', dark, align, className, ...props }: DropdownMenuProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames(
          'dropdown-menu',
          {
            'dropdown-menu-dark': dark,
            [joinPropArray(align, 'dropdown-menu-')]: align
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default DropdownMenu;
