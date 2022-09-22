/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react';
import classnames from 'classnames'
import { jsx } from '@emotion/react';
import handleCssProp, { type CssProp } from './_reboot/handleCssProp';
import handleUtilityClasses, { type UtilityProps } from './_reboot/handleUtilityClasses'

type AlertHeadingProps = {
} & React.HTMLAttributes<HTMLHeadingElement> & UtilityProps & CssProp

const AlertHeading = React.forwardRef(
  ({ css, ...props }: AlertHeadingProps, ref: React.Ref<any>) => {

    const [ utilityClasses, filteredProps ] = handleUtilityClasses(props)

    return (
      <h4
        className={classnames("alert-heading", utilityClasses)}
        css={handleCssProp(css)}
        ref={ref}
        {...filteredProps}
      >
        {props.children}
      </h4>
    );
  }
);

export default AlertHeading;
