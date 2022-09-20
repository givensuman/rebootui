/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react';
import classnames from 'classnames';
import { jsx } from '@emotion/react';
import handleCssProp, { type CssProp } from './_reboot/handleCssProp';

type BreadcrumbProps = {
  css?: CssProp;
} & React.HTMLAttributes<HTMLElement>;

const Breadcrumb = React.forwardRef(
  ({ css, ...props }: BreadcrumbProps, ref: React.Ref<any>) => {
    return (
      <nav
        aria-label="breadcrumb"
        css={handleCssProp(css)}
        ref={ref}
        {...props}
      >
        <ol className="breadcrumb">{props.children}</ol>
      </nav>
    );
  }
);

export default Breadcrumb;
