/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react'
import classnames from 'classnames'
import { jsx } from '@emotion/react'
import handleCssProp, { type CssProp } from './_reboot/handleCssProp'

type BreadcrumbItemProps = {
  active?: boolean,
  href?: string,

  css?: CssProp,
} & React.HTMLAttributes<HTMLLIElement>

const BreadcrumbItem = React.forwardRef((
  {
    active,
    href,

    css,
    ...props
  }: BreadcrumbItemProps, 
  ref: React.Ref<any>
) => {
  return ( 
    <li
      className={classnames('breadcrumb-item', {
        'active': active
      })}
      aria-current={active && 'page'}

      css={handleCssProp(css)}
      ref={ref}
    
      {...props}
    >
      {active
        ? <span>{props.children}</span>
        : <a href={href}>{props.children}</a>
      }
    </li>
  )
})

export default BreadcrumbItem