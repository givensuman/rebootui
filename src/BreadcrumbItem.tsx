import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type BreadcrumbItemProps = {
  active?: boolean;
  href?: string;
} & GlobalProps & React.HTMLAttributes<HTMLLIElement>

const BreadcrumbItem = React.forwardRef(
  (
    {
      as = 'li',
      active,
      href,
      ...props
    }: BreadcrumbItemProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={classnames('breadcrumb-item', {
          'active': active
        })}
        aria-current={active && 'page'}
        ref={ref}
        {...props}
      >
        {active ? (
          <span>{props.children}</span>
        ) : (
          <a href={href}>{props.children}</a>
        )}
      </Box>
    );
  }
);

export default BreadcrumbItem;