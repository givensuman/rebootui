import React from 'react'
import cn from 'classnames'

export type CardProps = {
} & React.HTMLAttributes<HTMLDivElement>

export const Card = ({
  ...props
}: CardProps) => {
  return (
    <div className="card" {...props}>
      {props.children}
    </div>
  )
}
