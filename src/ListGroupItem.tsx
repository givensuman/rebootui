import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps, type Variant } from './_reboot/types';

type ListGroupItemProps = {
  variant?: Variant;
  action?: boolean;
  active?: boolean;
  disabled?: boolean;
} & GlobalProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const ListGroupItem = React.forwardRef(
  (
    {
      as = 'a',
      className,
      variant,
      // props.active,
      // props.disabled
      action,
      ...props
    }: ListGroupItemProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames(
          'list-group-item',
          {
            [`list-group-item-${variant}`]: variant,
            'list-group-item-action': action,
            active: props.active,
            disabled: props.disabled
          },
          className
        )}
        aria-current={props.active}
        aria-disabled={props.disabled}
        ref={ref}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default ListGroupItem;
