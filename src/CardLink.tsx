import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type CardLinkProps = {} & GlobalProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const CardLink = React.forwardRef(
  ({ as = 'a', className, ...props }: CardLinkProps, ref: React.Ref<any>) => {
    return (
      <Box
        as={as}
        className={classnames('card-link', className)}
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default CardLink;
