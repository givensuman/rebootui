import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type ToastHeaderProps = {} & GlobalProps & React.HTMLAttributes<HTMLDivElement>;

const ToastHeader = React.forwardRef(
  (
    { as = 'div', className, ...props }: ToastHeaderProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames('toast-header', className)}
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default ToastHeader;
