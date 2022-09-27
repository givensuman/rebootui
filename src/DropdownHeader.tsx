/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react';
import classnames from 'classnames';
import { jsx } from '@emotion/react';
import handleCssProp, { type CssProp } from './_reboot/handleCssProp';
import handleUtilityClasses, {
  type UtilityProps
} from './_reboot/handleUtilityClasses';

type DropdownHeaderProps = {} & React.HTMLAttributes<HTMLHeadingElement> &
  UtilityProps &
  CssProp;

const DropdownHeader = React.forwardRef(
  ({ css, ...props }: DropdownHeaderProps, ref: React.Ref<any>) => {
    const [utilityClasses, filteredProps] = handleUtilityClasses(props);

    return (
      <h6
        className={classnames('dropdown-header', utilityClasses)}
        css={handleCssProp(css)}
        ref={ref}
        {...filteredProps}
      >
        {props.children}
      </h6>
    );
  }
);

export default DropdownHeader;
