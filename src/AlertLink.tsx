import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type AlertLinkProps = {} & GlobalProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const AlertLink = React.forwardRef(
  ({ as = 'a', className, ...props }: AlertLinkProps, ref: React.Ref<any>) => {
    return (
      <Box
        as={as}
        className={classnames('alert-link', className)}
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default AlertLink;
