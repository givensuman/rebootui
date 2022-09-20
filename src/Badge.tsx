/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react'
import classnames from 'classnames'
import { jsx } from '@emotion/react'
import handleCssProp, { type CssProp } from './_reboot/handleCssProp'
import { type Variant } from './_reboot/types'

type BadgeProps = {
  variant?: Variant,
  pill?: boolean,
  label?: string,

  css?: CssProp,
} & React.HTMLAttributes<HTMLDivElement>

const Badge = React.forwardRef((
  {
    variant = 'primary',
    pill,
    label,

    css,
    ...props
  }: BadgeProps, 
  ref: React.Ref<any>
) => {
  return (
    <div
      className={classnames('badge', {
        [`text-bg-${variant}`]: variant,
        'rounded-pill': pill
      })}

      css={handleCssProp(css)}
      ref={ref}

      {...props}
    >
      {label && <span className="visually-hidden">{label}</span>}
      {props.children}
    </div>
  )
})

export default Badge