/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react'
import classnames from 'classnames'
import { jsx } from '@emotion/react'
import handleCssProp, { type CssProp } from './_reboot/handleCssProp'
import handleUtilityClasses, { type UtilityProps } from './_reboot/handleUtilityClasses'

import Button, { type ButtonProps } from './Button'

type DropdownButtonProps = {
  className?: string
} & ButtonProps

const DropdownButton = React.forwardRef((
  {
    className = '',

    ...props
  }: DropdownButtonProps, 
  ref: React.Ref<any>
) => {

  return (
    <Button
      className={`${className} dropdown-toggle`}
      data-bs-toggle="dropdown"
      aria-expanded="false"
      {...props}
    >
      {props.children}
    </Button>
  )
})

export default DropdownButton