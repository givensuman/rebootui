import { type CSSObject } from '@emotion/react'
import classnames, { type Argument } from 'classnames'

export interface Props {
    css?: CSSObject | string,
    text?: ('start' | 'center' | 'end' | 'wrap' | 'nowrap' | 'break' | 'lowercase' | 'uppercase' | 'capitalize' | 'muted' | 'reset')[],
    align?: 'baseline' | 'top' | 'middle' | 'bottom' | 'text-top' | 'text-bottom',
    visibility?: 'visible' | 'invisible'
}

const joinPropArray = (propArray: string[] = [''], prefix: string) => 
    propArray.map(prop => prefix + prop).join(' ')

export default function manageClassNames(props: Props, ...rest: Argument[]) {
    return classnames(
        ...rest,
        {
            [joinPropArray(props.text, 'text-')]: props.text,
            [`align-${props.align}`]: props.align,
            [`${props.visibility}`]: props.visibility
        }
    )
}