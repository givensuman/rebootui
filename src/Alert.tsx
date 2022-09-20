/** @jsx jsx */
/** @jsxRuntime classic */
import React, { createContext } from 'react'
import classnames from 'classnames'
import { jsx } from '@emotion/react'
import handleCssProp, { type CssProp } from './_reboot/handleCssProp'
import { type Variant } from './_reboot/types'

type AlertProps = {
  variant?: Variant,
  dismissible?: boolean,

  css?: CssProp,
} & React.HTMLAttributes<HTMLDivElement>

export const AlertContext = createContext('primary')

const Alert = React.forwardRef((
  {
    variant = 'primary',
    dismissible,

    css,
    ...props
  }: AlertProps, 
  ref: React.Ref<any>
) => {
  return (
    <AlertContext.Provider value={variant}>
      <div
        className={classnames('alert', {
          [`alert-${variant}`]: variant,
          'alert-dismissible': dismissible
        })}
        role="alert"

        css={handleCssProp(css)}
        ref={ref}

        {...props}
      >
        {props.children}
        {dismissible && (
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          />
        )}
      </div>
    </AlertContext.Provider>
  )
})

export default Alert