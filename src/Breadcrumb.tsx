/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react';
import classnames from 'classnames';
import { jsx } from '@emotion/react';
import handleCssProp, { type CssProp } from './_reboot/handleCssProp';
import handleUtilityClasses, {
  type UtilityProps
} from './_reboot/handleUtilityClasses';

type BreadcrumbProps = {} & React.HTMLAttributes<HTMLElement> &
  UtilityProps &
  CssProp;

const Breadcrumb = React.forwardRef(
  ({ css, ...props }: BreadcrumbProps, ref: React.Ref<any>) => {
    const [utilityClasses, filteredProps] = handleUtilityClasses(props);

    return (
      <nav
        className={classnames(utilityClasses)}
        aria-label="breadcrumb"
        css={handleCssProp(css)}
        ref={ref}
        {...filteredProps}
      >
        <ol className="breadcrumb">{props.children}</ol>
      </nav>
    );
  }
);

export default Breadcrumb;
