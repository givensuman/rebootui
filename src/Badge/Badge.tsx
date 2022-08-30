import React from 'react';
import cn from 'classnames';

export type BadgeProps = {
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link';
  pill?: boolean;
} & React.HTMLAttributes<HTMLSpanElement>;

export const Badge = ({
  variant = 'secondary',
  pill,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={cn('badge', {
        [`text-bg-${variant}`]: variant,
        'rounded-pill': pill
      })}
      {...props}
    >
      {props.children}
    </span>
  );
};

// const Component = makeComponent<Props>(Badge)
// export default Component
