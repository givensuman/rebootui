import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type CardFooterProps = {} & GlobalProps & React.HTMLAttributes<HTMLDivElement>;

const CardFooter = React.forwardRef(
  (
    { as = 'div', className, ...props }: CardFooterProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames('card-footer', className)}
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default CardFooter;
