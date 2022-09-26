/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react'
import classnames from 'classnames'
import { jsx } from '@emotion/react'
import handleCssProp, { type CssProp } from './_reboot/handleCssProp'
import handleUtilityClasses, { type UtilityProps } from './_reboot/handleUtilityClasses'

import { type Breakpoints } from './_reboot/types'
import joinPropArray from './_reboot/joinPropArray'

type DropdownAlignment = 'start' | 'end' | `${Breakpoints}-start` | `${Breakpoints}-end`

type DropdownMenuProps = {
  dark?: boolean,
  align?: DropdownAlignment | DropdownAlignment[]
} & React.HTMLAttributes<HTMLDivElement> & UtilityProps & CssProp

const DropdownMenu = React.forwardRef((
  {
    dark,
    align,

    css,
    ...props
  }: DropdownMenuProps, 
  ref: React.Ref<any>
) => {

  const [ utilityClasses, filteredProps ] = handleUtilityClasses(props)

  return (
    <div
      className={classnames('dropdown-menu', {
        'dropdown-menu-dark': dark,
        [joinPropArray(align, 'dropdown-menu-')]: align
      }, utilityClasses)}

      css={handleCssProp(css)}
      ref={ref}

      {...filteredProps}
    >
      {props.children}
    </div>
  )
})

export default DropdownMenu