import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type CardSubtitleProps = {
} & GlobalProps & React.HTMLAttributes<HTMLHeadingElement>

const CardSubtitle = React.forwardRef(
  (
    {
      as = 'h6',
      className,
      ...props
    }: CardSubtitleProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames('card-subtitle', className)}
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default CardSubtitle;