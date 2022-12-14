import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type AlertHeadingProps = {} & GlobalProps &
  React.HTMLAttributes<HTMLHeadingElement>;

const AlertHeading = React.forwardRef(
  (
    { as = 'h4', className, ...props }: AlertHeadingProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames('alert-heading', className)}
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default AlertHeading;
