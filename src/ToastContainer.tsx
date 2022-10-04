import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type ToastContainerProps = {
} & GlobalProps & React.HTMLAttributes<HTMLDivElement>

const ToastContainer = React.forwardRef(
  (
    {
      as = 'div',
      className,
      ...props
    }: ToastContainerProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames('toast-container', className)}
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default ToastContainer;