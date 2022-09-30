/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react';
import classnames from 'classnames';
import { jsx } from '@emotion/react';
import handleCssProp, { type CssProp } from './_reboot/handleCssProp';
import handleUtilityClasses, {
  type UtilityProps
} from './_reboot/handleUtilityClasses';

type DropdownDividerProps = {} & React.HTMLAttributes<HTMLHRElement> &
  UtilityProps &
  CssProp;

const DropdownDivider = React.forwardRef(
  ({ css, ...props }: DropdownDividerProps, ref: React.Ref<any>) => {
    const [utilityClasses, filteredProps] = handleUtilityClasses(props);

    return (
      <hr
        className={classnames('dropdown-divider', utilityClasses)}
        css={handleCssProp(css)}
        ref={ref}
        {...filteredProps}
      />
    );
  }
);

export default DropdownDivider;
