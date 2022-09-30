/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react';
import classnames from 'classnames';
import { jsx } from '@emotion/react';
import handleCssProp, { type CssProp } from './_reboot/handleCssProp';
import handleUtilityClasses, {
  type UtilityProps
} from './_reboot/handleUtilityClasses';

type BreadcrumbItemProps = {
  active?: boolean;
  href?: string;
} & React.HTMLAttributes<HTMLLIElement> &
  UtilityProps &
  CssProp;

const BreadcrumbItem = React.forwardRef(
  (
    {
      active,
      href,

      css,
      ...props
    }: BreadcrumbItemProps,
    ref: React.Ref<any>
  ) => {
    const [utilityClasses, filteredProps] = handleUtilityClasses(props);

    return (
      <li
        className={classnames(
          'breadcrumb-item',
          {
            active: active
          },
          utilityClasses
        )}
        aria-current={active && 'page'}
        css={handleCssProp(css)}
        ref={ref}
        {...filteredProps}
      >
        {active ? (
          <span>{props.children}</span>
        ) : (
          <a href={href}>{props.children}</a>
        )}
      </li>
    );
  }
);

export default BreadcrumbItem;
