import React from 'react'
import cn from 'classnames'

export type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link',
    size?: 'lg' | 'sm',
    outlined?: boolean,
    active?: boolean,
    disabled?: boolean
} & React.HTMLAttributes<HTMLButtonElement>

export const Button = ({
    variant = 'primary',
    outlined,
    size,
    active,
    ...props
}: ButtonProps) => {
    return (
        <button
            {...props}
            className={cn('btn', {
                [`btn-${variant}`]: !outlined && variant,
                [`btn-outline-${variant}`]: outlined,
                [`btn-${size}`]: size,
                'active': active
            })}
        >
            {props.children}
        </button>
    )
}

export default Button