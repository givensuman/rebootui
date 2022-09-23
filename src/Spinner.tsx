/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react'
import classnames from 'classnames'
import { jsx } from '@emotion/react'
import handleCssProp, { type CssProp } from './_reboot/handleCssProp'
import handleUtilityClasses, { type UtilityProps } from './_reboot/handleUtilityClasses'
import { type Variant } from './_reboot/types'

type SpinnerProps = {
  variant?: Variant | 'link';
  type?: 'border' | 'grow';
  small?: boolean;
} & React.HTMLAttributes<HTMLElement> & UtilityProps & CssProp

const Spinner = React.forwardRef((
  {
    variant = 'primary',
    type = 'border',
    small,

    css,
    ...props
  }: SpinnerProps, 
  ref: React.Ref<any>
) => {

  const [ utilityClasses, filteredProps ] = handleUtilityClasses(props)

  return (
    <div
      className={classnames({
        [`spinner-${type}`]: type,
        [`text-${variant}`]: variant,
        [`spinner-${type}-sm`]: small && type
      }, utilityClasses)}
      role="status"

      css={handleCssProp(css)}
      ref={ref}

      {...filteredProps}
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  )
})

export default Spinner