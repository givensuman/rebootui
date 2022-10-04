import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type ModalTitleProps = {} & GlobalProps &
  React.HTMLAttributes<HTMLHeadingElement>;

const ModalTitle = React.forwardRef(
  (
    { as = 'h1', className, ...props }: ModalTitleProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames('modal-title', className)}
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default ModalTitle;
