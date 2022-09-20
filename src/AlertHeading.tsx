/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react';
import { jsx } from '@emotion/react';
import handleCssProp, { type CssProp } from './_reboot/handleCssProp';

type AlertHeadingProps = {
  css?: CssProp;
} & React.HTMLAttributes<HTMLHeadingElement>;

const AlertHeading = React.forwardRef(
  ({ css, ...props }: AlertHeadingProps, ref: React.Ref<any>) => {
    return (
      <h4
        className="alert-heading"
        css={handleCssProp(css)}
        ref={ref}
        {...props}
      >
        {props.children}
      </h4>
    );
  }
);

export default AlertHeading;
