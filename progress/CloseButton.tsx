/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react';
import classnames from 'classnames';
import { jsx } from '@emotion/react';
import handleCssProp, { type CssProp } from './_reboot/handleCssProp';
import handleUtilityClasses, {
  type UtilityProps
} from './_reboot/handleUtilityClasses';

type CloseButtonProps = {
  white?: boolean;
} & React.HTMLAttributes<HTMLButtonElement> &
  UtilityProps &
  CssProp;

const CloseButton = React.forwardRef(
  (
    {
      white,

      css,
      ...props
    }: CloseButtonProps,
    ref: React.Ref<any>
  ) => {
    const [utilityClasses, filteredProps] = handleUtilityClasses(props);

    return (
      <button
        className={classnames(
          'btn-close',
          {
            'btn-close-white': white
          },
          utilityClasses
        )}
        type="button"
        aria-label="Close"
        css={handleCssProp(css)}
        ref={ref}
        {...filteredProps}
      />
    );
  }
);

export default CloseButton;
