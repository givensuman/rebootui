import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type CardHeaderProps = {
} & GlobalProps & React.HTMLAttributes<HTMLDivElement>

const CardHeader = React.forwardRef(
  (
    {
      as = 'div',
      className,
      ...props
    }: CardHeaderProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames('card-header', className)}
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default CardHeader;