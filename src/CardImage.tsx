import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type CardImageProps = {
} & GlobalProps & React.HTMLAttributes<HTMLElement>

const CardImage = React.forwardRef(
  (
    {
      as = 'div',
      className,
      ...props
    }: CardImageProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames('')}
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default CardImage;