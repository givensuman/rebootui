/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react';
import classnames from 'classnames'
import { jsx } from '@emotion/react';
import handleCssProp, { type CssProp } from './_reboot/handleCssProp';
import handleUtilityClasses, { type UtilityProps } from './_reboot/handleUtilityClasses';

import { AlertContext } from './Alert';

type AlertLinkProps = {
} & React.AnchorHTMLAttributes<HTMLAnchorElement> & UtilityProps & CssProp

const AlertLink = React.forwardRef(
  ({ css, ...props }: AlertLinkProps, ref: React.Ref<any>) => {

    const [ utilityClasses, filteredProps ] = handleUtilityClasses(props)

    return (
      <a 
        className={classnames("alert-link", utilityClasses)}
        css={handleCssProp(css)} 
        ref={ref} 
        {...filteredProps}
      >
        {props.children}
      </a>
    );
  }
);

export default AlertLink;
