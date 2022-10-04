import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type ToastBodyProps = {
} & GlobalProps & React.HTMLAttributes<HTMLDivElement>

const ToastBody = React.forwardRef(
  (
    {
      as = 'div',
      className,
      ...props
    }: ToastBodyProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames('toast-body', className)}
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default ToastBody;