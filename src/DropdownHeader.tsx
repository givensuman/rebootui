import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type DropdownHeaderProps = {
} & GlobalProps & React.HTMLAttributes<HTMLHeadingElement>

const DropdownHeader = React.forwardRef(
  (
    {
      as = 'h6',
      className,
      ...props
    }: DropdownHeaderProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames('dropdown-header', className)}
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default DropdownHeader;