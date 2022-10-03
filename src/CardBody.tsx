import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type CardBodyProps = {
} & GlobalProps & React.HTMLAttributes<HTMLDivElement>

const CardBody = React.forwardRef(
  (
    {
      as = 'div',
      className,
      ...props
    }: CardBodyProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames('card-body', className)}
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default CardBody;