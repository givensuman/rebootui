import React from 'react'

export type BreadcrumbProps = {
} & React.HTMLAttributes<HTMLElement>

export const Breadcrumb = ({
  ...props
}: BreadcrumbProps) => {
  return (
    <nav
      aria-label="breadcrumb"
      {...props}
    >
      <ol className="breadcrumb">
        {props.children}
      </ol>
    </nav>
  )
}

export type BreadcrumbItemProps = {
  active?: boolean,
  href?: string,
} & React.HTMLAttributes<HTMLLIElement>

export const BreadcrumbItem = ({
  active,
  href,
  ...props
}: BreadcrumbItemProps) => {
  if (active) {
    return (
      <li 
        className="breadcrumb-item active"
        aria-current="page" 
        {...props}
      >
        <span>{props.children}</span>
      </li>
    )
  }
  return (
    <li className="breadcrumb-item" {...props}>
      <a href={href}>
        {props.children}
      </a>
    </li>
  )
}
