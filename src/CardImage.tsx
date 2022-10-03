import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type CardImageProps = {
  placement?: 'top' | 'bottom' | 'overlay';
} & GlobalProps & React.ImgHTMLAttributes<HTMLImageElement>

const CardImage = React.forwardRef(
  (
    {
      as = 'img',
      className,
      placement = 'top',
      ...props
    }: CardImageProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames({
          [`card-img-${placement}`]: placement
        }, className)}
        ref={ref}
        {...props}
      />
    );
  }
);

export default CardImage;