/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { CSSObject, jsx } from '@emotion/react'

export interface Props {
    css?: CSSObject,
}

export default function attachCssProp<T>(Component: React.ComponentType<T>) {
    return (props: T & Props) =>
        <Component
            css={props.css}
            {...props}
        />
}