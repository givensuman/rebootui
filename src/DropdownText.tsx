import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type DropdownTextProps = {
} & GlobalProps & React.HTMLAttributes<HTMLSpanElement>

const DropdownText = React.forwardRef(
  (
    {
      as = 'span',
      className,
      ...props
    }: DropdownTextProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames('dropdown-item-text', className)}
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default DropdownText;