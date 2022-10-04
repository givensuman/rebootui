import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type ModalBodyProps = {} & GlobalProps & React.HTMLAttributes<HTMLDivElement>;

const ModalBody = React.forwardRef(
  (
    { as = 'div', className, ...props }: ModalBodyProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames('modal-body', className)}
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default ModalBody;
