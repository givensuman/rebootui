/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react'
import classnames from 'classnames'
import { jsx } from '@emotion/react'
import handleCssProp, { type CssProp } from './_reboot/handleCssProp'
import handleUtilityClasses, { type UtilityProps } from './_reboot/handleUtilityClasses'
import { type Size } from './_reboot/types'

type ButtonGroupProps = {
  role?: 'group' | 'toolbar';
  label?: string;
  size?: Size;
  vertical?: boolean;
} & React.HTMLAttributes<HTMLDivElement> & UtilityProps & CssProp

const ButtonGroup = React.forwardRef((
  {
    role,
    label,
    size,
    vertical,

    css,
    ...props
  }: ButtonGroupProps, 
  ref: React.Ref<any>
) => {

  const [ utilityClasses, filteredProps ] = handleUtilityClasses(props)

  return (
    <div
      className={classnames('btn-group', {
        [`btn-group-${size}`]: size,
        'btn-group-vertical': vertical
      }, utilityClasses)}

      css={handleCssProp(css)}
      ref={ref}

      {...filteredProps}
    >
      {props.children}
    </div>
  )
})

export default ButtonGroup