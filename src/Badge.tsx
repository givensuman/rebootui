/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react';
import classnames from 'classnames';
import { jsx } from '@emotion/react';
import handleCssProp, { type CssProp } from './_reboot/handleCssProp';
import handleUtilityClasses, {
  type UtilityProps
} from './_reboot/handleUtilityClasses';
import { type Variant } from './_reboot/types';

type BadgeProps = {
  variant?: Variant;
  pill?: boolean;
  label?: string;
} & React.HTMLAttributes<HTMLDivElement> &
  UtilityProps &
  CssProp;

const Badge = React.forwardRef(
  (
    {
      variant = 'primary',
      pill,
      label,

      css,
      ...props
    }: BadgeProps,
    ref: React.Ref<any>
  ) => {
    const [utilityClasses, filteredProps] = handleUtilityClasses(props);

    return (
      <div
        className={classnames(
          'badge',
          {
            [`text-bg-${variant}`]: variant,
            'rounded-pill': pill
          },
          utilityClasses
        )}
        css={handleCssProp(css)}
        ref={ref}
        {...filteredProps}
      >
        {label && <span className="visually-hidden">{label}</span>}
        {props.children}
      </div>
    );
  }
);

export default Badge;
