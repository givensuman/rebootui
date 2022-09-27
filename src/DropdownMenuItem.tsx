/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react';
import classnames from 'classnames';
import { jsx } from '@emotion/react';
import handleCssProp, { type CssProp } from './_reboot/handleCssProp';
import handleUtilityClasses, {
  type UtilityProps
} from './_reboot/handleUtilityClasses';

type DropdownMenuItemProps = {
  active?: boolean;
  disabled?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  UtilityProps &
  CssProp;

const DropdownMenuItem = React.forwardRef(
  (
    {
      active,
      disabled,

      css,
      ...props
    }: DropdownMenuItemProps,
    ref: React.Ref<any>
  ) => {
    const [utilityClasses, filteredProps] = handleUtilityClasses(props);

    return (
      <a
        className={classnames(
          'dropdown-item',
          {
            active: active,
            disabled: disabled
          },
          utilityClasses
        )}
        aria-current={active}
        css={handleCssProp(css)}
        ref={ref}
        {...filteredProps}
      >
        {props.children}
      </a>
    );
  }
);

export default DropdownMenuItem;
