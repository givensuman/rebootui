import classnames, { type Argument } from 'classnames';
import React from 'react';

type TextType =
  | 'start'
  | 'center'
  | 'end'
  | 'sm-start'
  | 'md-start'
  | 'lg-start'
  | 'xl-start'
  | 'sm-center'
  | 'md-center'
  | 'lg-center'
  | 'xl-center'
  | 'sm-end'
  | 'md-end'
  | 'lg-end'
  | 'xl-end'
  | 'wrap'
  | 'nowrap'
  | 'break'
  | 'lowercase'
  | 'uppercase'
  | 'capitalize'
  | 'muted'
  | 'reset';

type SpacingType =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | 'auto'
  | 'sm-0'
  | 'sm-1'
  | 'sm-2'
  | 'sm-3'
  | 'sm-4'
  | 'sm-5'
  | 'md-0'
  | 'md-1'
  | 'md-2'
  | 'md-3'
  | 'md-4'
  | 'md-5'
  | 'lg-0'
  | 'lg-1'
  | 'lg-2'
  | 'lg-3'
  | 'lg-4'
  | 'lg-5'
  | 'xl-0'
  | 'xl-1'
  | 'xl-2'
  | 'xl-3'
  | 'xl-4'
  | 'xl-5'
  | 'xl-0'
  | 'xl-1'
  | 'xl-2'
  | 'xl-3'
  | 'xl-4'
  | 'xl-5'
  | 'xxl-0'
  | 'xxl-1'
  | 'xxl-2'
  | 'xxl-3'
  | 'xxl-4'
  | 'xxl-5'
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5;

type VariantType = 
  | 'primary' 
  | 'secondary' 
  | 'success' 
  | 'danger'
  | 'warning'
  | 'info' 
  | 'light' 
  | 'dark'

type SpacingProps = {
  [K in
    | 'm'
    | 'mt'
    | 'mb'
    | 'ms'
    | 'me'
    | 'mx'
    | 'my'
    | 'p'
    | 'pt'
    | 'pb'
    | 'ps'
    | 'pe'
    | 'px'
    | 'py'
    | 'gap'
  ]?: SpacingType | SpacingType[];
};

const spacingPrefixes = [
  'm',
  'mt',
  'mb',
  'ms',
  'me',
  'mx',
  'my',
  'p',
  'pt',
  'pb',
  'ps',
  'pe',
  'px',
  'py',
  'gap'
];

type BorderType = '0' | '1' | '2' | '3' | '4' | '5' | 0 | 1 | 2 | 3 | 4 | 5 | boolean

type BorderProps = {
  [K in 
    | 'border'
    | 'borderTop'
    | 'borderEnd'
    | 'borderBottom'
    | 'borderStart'
  ]?: BorderType
}

export type UtilityProps = {
  bg?: VariantType | 'white' | 'transparent' | 'body',
  bgOpacity?: '10' | '25' | '50' | '75' | '100' | 10 | 24 | 50 | 75 | 100,
  bgGradient?: boolean,
  borderColor?: VariantType | 'white',
  rounded?: boolean | 'top' | 'end' | 'bottom' | 'start' | 'circle' | 'pill',  
  borderRadius?: '0' | '1' | '2' | '3' | '4' | '5' | 1 | 2 | 3 | 4 | 5,
  borderOpacity?: '75' | '50' | '25' | '10' | 75 | 50 | 25 | 10,
  color?: VariantType | 'body' | 'muted' | 'white' | 'black-50' | 'white-50',
  text?: TextType[] | TextType;
  fontSize?: '1' | '2' | '3' | '4' | '5' | '6' | 1 | 2 | 3 | 4 | 5 | 6;
  fontWeight?: 'bold' | 'bolder' | 'semibold' | 'normal' | 'light' | 'lighter';
  fontStyle?: 'italic' | 'normal';
  lineHeight?: '1' | 'sm' | 'base' | 'lg' | 1;
  monospace?: boolean;
  textDecoration?: 'underline' | 'line-through' | 'none';
  align?: 'baseline' | 'top' | 'middle' | 'bottom' | 'text-top' | 'text-bottom';
  visibility?: 'visible' | 'invisible';

  className?: string,
} & SpacingProps & BorderProps;

const joinPropArray = (input: string[] | string = '', prefix: string) => {
  if (Array.isArray(input)) {
    return input.map((prop) => prefix + prop).join(' ');
  } else {
    return prefix + input;
  }
};

export default function handleUtilityClasses<T>(
  props: UtilityProps & T,
  ...rest: Argument[]
) {
  const {
    bg,
    bgOpacity,
    bgGradient,
    border,
    borderTop,
    borderBottom,
    borderStart,
    borderEnd,
    borderColor,
    rounded,
    borderRadius,
    borderOpacity,
    m,
    mt,
    mb,
    ms,
    me,
    mx,
    my,
    p,
    pt,
    pb,
    ps,
    pe,
    px,
    py,
    gap,
    text,
    fontSize,
    fontWeight,
    fontStyle,
    lineHeight,
    monospace,
    textDecoration,
    align,
    visibility,

    className,
    ...componentProps
  } = props;

  const utilityClasses = classnames(...rest, {
    [`bg-${bg}`]: bg,
    'bg-gradient': bgGradient,
    [`bg-${bgOpacity}`]: bgOpacity,
    'border': border && typeof border === 'boolean',
    [`border border-${String(border)}`]: border && typeof border !== 'boolean',
    [`border-top-${String(borderTop)}`]: borderTop,
    [`border-bottom-${String(borderBottom)}`]: borderBottom,
    [`border-start-${String(borderStart)}`]: borderStart,
    [`border-end-${String(borderEnd)}`]: borderEnd,
    [`border-${borderColor}`]: borderColor,
    'rounded': rounded && typeof rounded === 'boolean',
    [`rounded-${rounded}`]: rounded && typeof rounded !== 'boolean',
    [`rounded-${String(borderRadius)}`]: borderRadius,
    [`border-opacity-${borderOpacity}`]: borderOpacity,
    // Creates a class for every possible prop result of spacing prefixes, e.g. my="xl-5" or gap="2"
    ...spacingPrefixes.reduce(
      (a, b) => ({
        ...a,
        [joinPropArray(props[b], `${b}-`)]: props[b]
      }),
      {}
    ),
    [joinPropArray(text, 'text-')]: text,
    [`fs-${fontSize}`]: fontSize,
    [`fw-${fontWeight}`]: fontWeight,
    [`fst-${fontStyle}`]: fontStyle,
    [`lh-${lineHeight}`]: lineHeight,
    'font-monospace': monospace,
    [`text-decoration-${textDecoration}`]: textDecoration,
    [`align-${align}`]: align,
    [`${visibility}`]: visibility
  }, className);

  return [utilityClasses, componentProps] as const;
}
