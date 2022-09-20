import { jsx, css, CSSObject } from '@emotion/react'

export type CssProp = string | CSSObject

export default function handleCssProp(cssProp) {
    return (
        typeof cssProp === 'string' 
            ? css`${cssProp}`
            : cssProp
    )
}