import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type ModalFooterProps = {} & GlobalProps & React.HTMLAttributes<HTMLDivElement>;

const ModalFooter = React.forwardRef(
  (
    { as = 'div', className, ...props }: ModalFooterProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames('modal-footer', className)}
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default ModalFooter;
