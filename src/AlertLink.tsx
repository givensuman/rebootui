/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react'
import { jsx } from '@emotion/react'
import handleCssProp, { type CssProp } from './_reboot/handleCssProp'

import { AlertContext } from './Alert'

type AlertLinkProps = {
  css?: CssProp,
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

const AlertLink = React.forwardRef((
  {
    css,
    ...props
  }: AlertLinkProps, 
  ref: React.Ref<any>
) => {
  return (
    <a
      className="alert-link"

      css={handleCssProp(css)}
      ref={ref}

      {...props}
    >
      {props.children}
    </a>
  )
})

export default AlertLink