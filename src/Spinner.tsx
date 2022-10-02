import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps, type Variant } from './_reboot/types';

type SpinnerProps = {
  variant?: Variant | 'link';
  type?: 'border' | 'grow';
  small?: boolean;
} & GlobalProps & React.HTMLAttributes<HTMLDivElement>

const Spinner = React.forwardRef(
  (
    {
      as = 'div',
      className,
      variant = 'primary',
      type = 'border',
      small,
      ...props
    }: SpinnerProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames({
          [`spinner-${type}`]: type,
          [`text-${variant}`]: variant,
          [`spinner-${type}-sm`]: small && type
        }, className)}
        role="status"
        ref={ref}
        {...props}
      >
        <span className="visually-hidden">Loading...</span>
        {props.children}
      </Box>
    );
  }
);

export default Spinner;