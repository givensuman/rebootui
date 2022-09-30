/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react';
import classnames from 'classnames';
import { jsx } from '@emotion/react';
import handleCssProp, { type CssProp } from './_reboot/handleCssProp';
import handleUtilityClasses, {
  type UtilityProps
} from './_reboot/handleUtilityClasses';

type CardImageProps = {
  placement?: 'top' | 'bottom' | 'overlay';
} & React.ImgHTMLAttributes<HTMLImageElement> &
  UtilityProps &
  CssProp;

const CardImage = React.forwardRef(
  (
    {
      placement,

      css,
      ...props
    }: CardImageProps,
    ref: React.Ref<any>
  ) => {
    const [utilityClasses, filteredProps] = handleUtilityClasses(props);

    return (
      <img
        className={classnames(
          {
            [`card-image-${placement}`]: placement,
            'card-img': !placement
          },
          utilityClasses
        )}
        css={handleCssProp(css)}
        ref={ref}
        {...filteredProps}
      >
        {props.children}
      </img>
    );
  }
);

export default CardImage;
