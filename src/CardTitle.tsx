/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react'
import classnames from 'classnames'
import { jsx } from '@emotion/react'
import handleCssProp, { type CssProp } from './_reboot/handleCssProp'
import handleUtilityClasses, { type UtilityProps } from './_reboot/handleUtilityClasses'

type CardTitleProps = {
} & React.HTMLAttributes<HTMLHeadingElement> & UtilityProps & CssProp

const CardTitle = React.forwardRef((
  {
    css,
    ...props
  }: CardTitleProps, 
  ref: React.Ref<any>
) => {

  const [ utilityClasses, filteredProps ] = handleUtilityClasses(props)

  return (
    <h5
      className={classnames('card-title', utilityClasses)}

      css={handleCssProp(css)}
      ref={ref}

      {...filteredProps}
    >
      {props.children}
    </h5>
  )
})

export default CardTitle