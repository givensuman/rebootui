import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';
import { Toast as bsToast } from 'bootstrap';

type ToastProps = {
  show: boolean;
  animation?: boolean;
  autohide?: boolean;
  delay?: number;
} & GlobalProps &
  React.HTMLAttributes<HTMLDivElement>;

const Toast = React.forwardRef(
  (
    {
      as = 'div',
      className,
      show,
      animation = true,
      autohide = true,
      delay = 5000,
      ...props
    }: ToastProps,
    ref: React.Ref<any>
  ) => {
    const toastRef = useRef<any>(ref);
    const [toastState, setToastState] = useState<any>(null);

    useLayoutEffect(() => {
      if (toastRef.current) {
        setToastState(
          new bsToast(toastRef.current, {
            animation: animation,
            autohide: autohide,
            delay: delay
          })
        );
      }
    }, [toastRef, animation, autohide, delay]);

    useEffect(() => {
      if (toastState) {
        if (show) {
          toastState?.show();
        } else {
          toastState?.hide();
        }
      }
    }, [show]);

    return (
      <Box
        as={as}
        className={classnames('toast', className)}
        ref={toastRef}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default Toast;
