import React from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type BreadcrumbProps = {
} & GlobalProps & React.HTMLAttributes<HTMLElement>

const Breadcrumb = React.forwardRef(
  (
    {
      as = 'nav',
      ...props
    }: BreadcrumbProps,
    ref: React.Ref<any>
  ) => {
    return (
      <Box
        as={as}
        className={props.className}
        aria-label="breadcrumb"
        ref={ref}
        {...props}
      >
        <ol className="breadcrumb">
          {props.children}
        </ol>
      </Box>
    );
  }
);

export default Breadcrumb;