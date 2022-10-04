import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type DropdownProps = {
  direction?: 'start' | 'end' | 'up' | 'down';
  centered?: boolean;
} & GlobalProps &
  React.HTMLAttributes<HTMLDivElement>;

const Dropdown = React.forwardRef(
  (
    {
      as = 'div',
      className,
      direction = 'down',
      centered,
      ...props
    }: DropdownProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames(
          {
            [`drop${direction}`]: direction,
            [`drop${direction}-center`]:
              direction === ('down' || 'up') && centered
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default Dropdown;
