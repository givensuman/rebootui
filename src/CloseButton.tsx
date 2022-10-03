import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type CloseButtonProps = {
  white?: boolean;
} & GlobalProps &
  React.HTMLAttributes<HTMLButtonElement>;

const CloseButton = React.forwardRef(
  (
    { as = 'button', className, white, ...props }: CloseButtonProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames(
          'btn-close',
          {
            'btn-close-white': white
          },
          className
        )}
        type="button"
        aria-label="Close"
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default CloseButton;
