/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react';
import classnames from 'classnames';
import { jsx } from '@emotion/react';
import handleCssProp, { type CssProp } from './_reboot/handleCssProp';
import handleUtilityClasses, {
  type UtilityProps
} from './_reboot/handleUtilityClasses';

type DropdownProps = {
  direction?: 'start' | 'end' | 'up' | 'down';
  centered?: boolean;
} & React.HTMLAttributes<HTMLDivElement> &
  UtilityProps &
  CssProp;

const Dropdown = React.forwardRef(
  (
    {
      direction = 'down',
      centered,

      css,
      ...props
    }: DropdownProps,
    ref: React.Ref<any>
  ) => {
    const [utilityClasses, filteredProps] = handleUtilityClasses(props);

    return (
      <div
        className={classnames(
          {
            [`drop${direction}`]: direction,
            [`drop${direction}-center`]:
              direction === ('down' || 'up') && centered
          },
          utilityClasses
        )}
        css={handleCssProp(css)}
        ref={ref}
        {...filteredProps}
      >
        {props.children}
      </div>
    );
  }
);

export default Dropdown;
