/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react'
import classnames from 'classnames'
import { jsx } from '@emotion/react'
import handleCssProp, { type CssProp } from './_reboot/handleCssProp'

type AlertBodyProps = {
  css?: CssProp,
} & React.HTMLAttributes<HTMLParagraphElement>

const AlertBody = React.forwardRef((
  {
    css,
    ...props
  }: AlertBodyProps, 
  ref: React.Ref<any>
) => {
  return (
    <p
      css={handleCssProp(css)}
      ref={ref}

      {...props}
    >
      {props.children}
    </p>
  )
})

export default AlertBody