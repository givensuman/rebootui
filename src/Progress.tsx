import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type ProgressProps = {} & GlobalProps & React.HTMLAttributes<HTMLDivElement>;

const Progress = React.forwardRef(
  ({ as = 'div', className, ...props }: ProgressProps, ref: React.Ref<any>) => {
    return (
      <Box
        as={as}
        className={classnames('progress', className)}
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default Progress;
