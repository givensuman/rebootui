/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react';
import classnames from 'classnames';
import { jsx } from '@emotion/react';
import handleCssProp, { type CssProp } from './_reboot/handleCssProp';
import handleUtilityClasses, {
  type UtilityProps
} from './_reboot/handleUtilityClasses';

type CardImageOverlayProps = {} & React.HTMLAttributes<HTMLDivElement> &
  UtilityProps &
  CssProp;

const CardImageOverlay = React.forwardRef(
  ({ css, ...props }: CardImageOverlayProps, ref: React.Ref<any>) => {
    const [utilityClasses, filteredProps] = handleUtilityClasses(props);

    return (
      <div
        className={classnames('card-img-overlay', utilityClasses)}
        css={handleCssProp(css)}
        ref={ref}
        {...filteredProps}
      >
        {props.children}
      </div>
    );
  }
);

export default CardImageOverlay;
