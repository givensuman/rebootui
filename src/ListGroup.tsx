import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type ListGroupProps = {
  flush?: boolean;
  horizontal?: boolean;
  numbered?: boolean;
} & GlobalProps &
  React.HTMLAttributes<HTMLUListElement>;

const ListGroup = React.forwardRef(
  (
    {
      as = 'ul',
      className,
      flush,
      horizontal,
      numbered,
      ...props
    }: ListGroupProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames(
          'list-group',
          {
            'list-group-flush': flush,
            'list-group-horizontal': horizontal,
            'list-group-numbered': numbered
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

export default ListGroup;
