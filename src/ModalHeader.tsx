import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type ModalHeaderProps = {} & GlobalProps & React.HTMLAttributes<HTMLDivElement>;

const ModalHeader = React.forwardRef(
  (
    { as = 'div', className, ...props }: ModalHeaderProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames('modal-header', className)}
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default ModalHeader;
