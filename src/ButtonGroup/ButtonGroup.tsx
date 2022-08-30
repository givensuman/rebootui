import React from 'react';
import cn from 'classnames';

export type ButtonGroupProps = {
  role?: 'group' | 'toolbar';
  label?: string;
  size?: 'lg' | 'sm';
  vertical?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const ButtonGroup = ({
  size,
  vertical,
  role,
  label,
  ...props
}: ButtonGroupProps) => {
  return (
    <div
      className={cn('btn-group', {
        [`btn-group-${size}`]: size,
        'btn-group-vertical': vertical
      })}
      role={role}
      aria-label={label}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default ButtonGroup;
