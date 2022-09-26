/** @jsx jsx */
/** @jsxRuntime classic */
import React, { useState, useEffect, createContext } from 'react'
import classnames from 'classnames'
import { jsx } from '@emotion/react'
import handleCssProp, { type CssProp } from './_reboot/handleCssProp'
import handleUtilityClasses, { type UtilityProps } from './_reboot/handleUtilityClasses'
import { Collapse as bsCollapse } from 'bootstrap'

type CollapseProps = {
} & React.HTMLAttributes<HTMLElement> & UtilityProps & CssProp

export const CollapseContext = createContext<any>(null)

const Collapse = React.forwardRef((
  {
    css,
    ...props
  }: CollapseProps, 
  ref: React.Ref<any>
) => {

  const [ utilityClasses, filteredProps ] = handleUtilityClasses(props)

  const collapseState = useState(null)

  return (
    <div
      className={classnames(utilityClasses)}

      css={handleCssProp(css)}
      ref={ref}

      {...filteredProps}
    >
      <CollapseContext.Provider value={collapseState}>
        {props.children}
      </CollapseContext.Provider>
    </div>
  )
})

export default Collapse