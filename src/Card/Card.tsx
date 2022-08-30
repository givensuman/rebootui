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

export type CardImageProps = {
  placement: 'top' | 'bottom' | 'overlay'
} & React.HTMLAttributes<HTMLImageElement>

export const CardImage = ({
  placement = 'top',
  ...props
}: CardImageProps) => {
  return (
    <>
    <img
      className={cn({
        [`card-image-${placement}`]: placement !== 'overlay',
        'card-img': placement === 'overlay'
      })}
      {...props}
    />
    {placement === 'overlay' && 
    <div className="card-img-overlay">
      {props.children}
    </div>
    }
    </>
  )
}

export const CardBody = ({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="card-body" {...props}>
      {props.children}
    </div>
  )
}

export const CardTitle = ({
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h5 className="card-title" {...props}>
      {props.children}
    </h5>
  )
}

export const CardSubtitle = ({
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h6 className="card-subtitle" {...props}>
      {props.children}
    </h6>
  )
}

export const CardText = ({
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className="card-text" {...props}>
      {props.children}
    </p>
  )
}

export const CardLink = ({
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a className="card-link" {...props}>
      {props.children}
    </a>
  )
}

export const CardHeader = ({
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <div className="card-header" {...props}>
      {props.children}
    </div>
  )
}

export const CardFooter = ({
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <div className="card-footer" {...props}>
      {props.children}
    </div>
  )
}