/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react'
import classnames from 'classnames'
import { jsx } from '@emotion/react'
import handleCssProp, { type CssProp } from './_reboot/handleCssProp'
import handleUtilityClasses, { type UtilityProps } from './_reboot/handleUtilityClasses'

type DropdownTextProps = {
} & React.HTMLAttributes<HTMLElement> & UtilityProps & CssProp

const DropdownText = React.forwardRef((
  {

    css,
    ...props
  }: DropdownTextProps, 
  ref: React.Ref<any>
) => {

  const [ utilityClasses, filteredProps ] = handleUtilityClasses(props)

  return (
    <div
      className={classnames(utilityClasses)}

      css={handleCssProp(css)}
      ref={ref}

      {...filteredProps}
    >
      {props.children}
    </div>
  )
})

export default DropdownText