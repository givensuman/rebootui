import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type DropdownDividerProps = {} & GlobalProps &
  React.HTMLAttributes<HTMLHRElement>;

const DropdownDivider = React.forwardRef(
  (
    { as = 'hr', className, ...props }: DropdownDividerProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames('dropdown-divider', className)}
        ref={ref}
        {...props}
      />
    );
  }
);

export default DropdownDivider;
