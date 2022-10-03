import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type CardProps = {} & GlobalProps & React.HTMLAttributes<HTMLDivElement>;

const Card = React.forwardRef(
  ({ as = 'div', className, ...props }: CardProps, ref: React.Ref<any>) => {
    return (
      <Box
        as={as}
        className={classnames('card', className)}
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default Card;
