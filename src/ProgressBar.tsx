import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type ProgressBarProps = {
  striped?: boolean;
  animated?: boolean;
} & GlobalProps &
  React.HTMLAttributes<HTMLDivElement>;

const ProgressBar = React.forwardRef(
  (
    { as = 'div', className, striped, animated, ...props }: ProgressBarProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames(
          'progress-bar',
          {
            'progress-bar-striped': striped && !animated,
            'progress-bar-animated progress-bar-striped': animated
          },
          className
        )}
        role="progressbar"
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default ProgressBar;
