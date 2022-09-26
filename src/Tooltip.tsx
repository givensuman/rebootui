/** @jsx jsx */
/** @jsxRuntime classic */
import React, { useRef, useEffect } from 'react'
import classnames from 'classnames'
import { jsx } from '@emotion/react'
import handleCssProp, { type CssProp } from './_reboot/handleCssProp'
import handleUtilityClasses, { type UtilityProps } from './_reboot/handleUtilityClasses'

import '@popperjs/core'
import { Tooltip as bsTooltip } from 'bootstrap'

type TooltipProps = {
  label: string,
  placement?: 'top' | 'right' | 'bottom' | 'left',
  delay?: number
} & React.HTMLAttributes<HTMLElement> & UtilityProps & CssProp

const Tooltip = ((
  {
    label,
    placement = 'top',
    delay = 0,

    css,
    ...props
  }: TooltipProps, 
  ref: React.Ref<any>
) => {

  const [ utilityClasses, filteredProps ] = handleUtilityClasses(props)

  const tooltipRef = useRef<any>(ref)

  useEffect(() => {
    new bsTooltip(tooltipRef.current, {
      boundary: document.body,
      delay: delay,
      placement: placement,
      title: label,
    })
  }, [tooltipRef, delay, placement, label])

  return (
    <span
      className={classnames(utilityClasses)}
      data-bs-toggle="tooltip"

      css={handleCssProp(css)}
      ref={tooltipRef}

      {...filteredProps}
    >
      {props.children}
    </span>
  )
})

export default Tooltip