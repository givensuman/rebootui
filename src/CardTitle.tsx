import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type CardTitleProps = {} & GlobalProps &
  React.HTMLAttributes<HTMLHeadingElement>;

const CardTitle = React.forwardRef(
  (
    { as = 'div', className, ...props }: CardTitleProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames('card-title', className)}
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default CardTitle;
