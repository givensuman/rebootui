import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps, type Variant } from './_reboot/types';

type BadgeProps = {
  variant?: Variant;
  pill?: boolean;
  label?: string;
} & GlobalProps & React.HTMLAttributes<HTMLSpanElement>

const Badge = React.forwardRef(
  (
    {
      as = 'span',
      variant,
      pill,
      label,
      ...props
    }: BadgeProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames('badge', {
          [`text-bg-${variant}`]: variant,
          'rounded-pill': pill
        })}
        ref={ref}
        {...props}
      >
        {label && <span className="visually-hidden">{label}</span>}
        {props.children}
      </Box>
    );
  }
);

export default Badge;