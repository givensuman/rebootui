/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react'
import classnames from 'classnames'
import { jsx } from '@emotion/react'
import handleCssProp, { type CssProp } from './_reboot/handleCssProp'
import handleUtilityClasses, { type UtilityProps } from './_reboot/handleUtilityClasses'

type CardSubtitleProps = {
} & React.HTMLAttributes<HTMLHeadingElement> & UtilityProps & CssProp

const CardSubtitle = React.forwardRef((
  {
    css,
    ...props
  }: CardSubtitleProps, 
  ref: React.Ref<any>
) => {

  const [ utilityClasses, filteredProps ] = handleUtilityClasses(props)

  return (
    <h6
      className={classnames('card-subtitle', utilityClasses)}

      css={handleCssProp(css)}
      ref={ref}

      {...filteredProps}
    >
      {props.children}
    </h6>
  )
})

export default CardSubtitle