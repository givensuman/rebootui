import React from 'react';
import cn from 'classnames';

export type SpinnerProps = {
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
  type?: 'border' | 'grow';
  small?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export const Spinner = ({
  variant = 'primary',
  type = 'border',
  small,
  ...props
}: SpinnerProps) => {
  return (
    <div
      className={cn({
        [`spinner-${type}`]: type,
        [`text-${variant}`]: variant,
        [`spinner-${type}-sm`]: small && type
      })}
      role="status"
      {...props}
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};
