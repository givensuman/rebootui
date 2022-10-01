import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps, type Variant } from './_reboot/types';

type AlertProps = {
  variant?: Variant;
  dismissible?: boolean;
} & GlobalProps

const Alert = React.forwardRef(
  (
    {
      as = 'div',
      variant = 'primary',
      dismissible,
      ...props
    }: AlertProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames('alert', {
          [`alert-${variant}`]: variant,
          'alert-dismissible': dismissible
        })}
        role="alert"
        ref={ref}
        {...props}
      >
        {props.children}
        {dismissible && (
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          />
        )}
      </Box>
    );
  }
);

export default Alert;