import classnames, { type Argument } from 'classnames';
import React from 'react';

type TextType =
  | 'start'
  | 'center'
  | 'end'
  | `${'sm' | 'md' | 'lg' | 'xl'}-${'start' | 'center' | 'end'}`
  | 'wrap'
  | 'nowrap'
  | 'break'
  | 'lowercase'
  | 'uppercase'
  | 'capitalize'
  | 'muted'
  | 'reset';

type Breakpoints = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type NumOrString<T extends number> = T | `${T}`

type SpacingType =
  | 'auto'
  | NumOrString<1 | 2 | 3 | 4 | 5>
  | `${Breakpoints}-${'1' | '2' | '3' | '4' | '5'}`;

type VariantType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark';

type Opacities = NumOrString<10 | 25 | 50 | 75 | 100>

type SpacingProps = {
  [K in
    | 'm'
    | 'p'
    | `${'m' | 'p'}${'t' | 'b' | 's' | 'e' | 'x' | 'y'}`
    | 'gap']?: SpacingType | SpacingType[];
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

type DisplayValue =
  | 'none'
  | 'inline'
  | 'inline-block'
  | 'block'
  | 'grid'
  | 'table'
  | 'table-cell'
  | 'table-row'
  | 'flex'
  | 'inline-flex';

type BorderType =
  | NumOrString<1 | 2 | 3 | 4 | 5>
  | boolean;

type BorderProps = {
  [K in
    | 'border'
    | 'borderTop'
    | 'borderEnd'
    | 'borderBottom'
    | 'borderStart']?: BorderType;
};

type DisplayType = DisplayValue | `${Breakpoints | 'print'}-${DisplayValue}`;

type FlexDirectionValue = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type FlexDirectionType =
  | FlexDirectionValue
  | `${Breakpoints}-${FlexDirectionValue}`;

type JustifyContentValue =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly';
type JustifyContentType =
  | JustifyContentValue
  | `${Breakpoints}-${JustifyContentValue}`;

type AlignValue = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
type AlignType = AlignValue | `${Breakpoints}-${AlignValue}`;

type FlexPropsValue = 'fill' | `${'grow' | 'shrink'}-${'0' | '1'}`;
type FlexProps = FlexPropsValue | `${Breakpoints}-${FlexPropsValue}`;

type FlexWrapValue = 'nowrap' | 'wrap' | 'wrap-reverse';
type FlexWrapType = FlexWrapValue | `${Breakpoints}-${FlexWrapValue}`;

type OrderValue =
  | NumOrString<1 | 2 | 3 | 4 | 5>
  | 'first'
  | 'last';
type OrderType = OrderValue | `${Breakpoints}-${OrderValue}`;

type FloatType = `${Breakpoints}-${'start' | 'end' | 'none'}`

type AlignContentValue =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'stretch';
type AlignContentType =
  | AlignContentValue
  | `${Breakpoints}-${AlignContentValue}`;

export type UtilityProps = {
  bg?: VariantType | 'white' | 'transparent' | 'body';
  bgOpacity?: Opacities;
  bgGradient?: boolean;
  borderColor?: VariantType | 'white';
  rounded?: boolean | 'top' | 'end' | 'bottom' | 'start' | 'circle' | 'pill';
  borderRadius?: NumOrString<0 | 1 | 2 | 3 | 4 | 5>;
  borderOpacity?: Opacities;
  color?: VariantType | 'body' | 'muted' | 'white';
  textOpacity?: Opacities;
  display?: DisplayType | DisplayType[];
  flexDirection?: FlexDirectionType | FlexDirectionType[];
  justifyContent?: JustifyContentType | JustifyContentType[];
  alignItems?: AlignType | AlignType[];
  alignSelf?: AlignType | AlignType[];
  flex?: FlexProps | FlexProps[];
  flexWrap?: FlexWrapType | FlexWrapType[];
  order?: OrderType | OrderType[];
  alignContent?: AlignContentType | AlignContentType[];

  float?: FloatType | FloatType[],

  text?: TextType[] | TextType;
  fontSize?: NumOrString<1 | 2 | 3 | 4 | 5 | 6>;
  fontWeight?: 'bold' | 'bolder' | 'semibold' | 'normal' | 'light' | 'lighter';
  fontStyle?: 'italic' | 'normal';
  lineHeight?: NumOrString<1> | 'sm' | 'base' | 'lg';
  monospace?: boolean;
  textDecoration?: 'underline' | 'line-through' | 'none';
  align?: 'baseline' | 'top' | 'middle' | 'bottom' | 'text-top' | 'text-bottom';
  visibility?: 'visible' | 'invisible';

  className?: string;
} & SpacingProps &
  BorderProps;

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
    color,
    textOpacity,
    display,
    flexDirection,
    justifyContent,
    alignItems,
    alignSelf,
    flex,
    flexWrap,
    order,
    alignContent,
    // Link here
    float,

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

  const utilityClasses = classnames(
    ...rest,
    {
      [`bg-${bg}`]: bg,
      'bg-gradient': bgGradient,
      [`bg-${bgOpacity}`]: bgOpacity,
      border: border && typeof border === 'boolean',
      [`border border-${String(border)}`]:
        border && typeof border !== 'boolean',
      [`border-top-${String(borderTop)}`]: borderTop,
      [`border-bottom-${String(borderBottom)}`]: borderBottom,
      [`border-start-${String(borderStart)}`]: borderStart,
      [`border-end-${String(borderEnd)}`]: borderEnd,
      [`border-${borderColor}`]: borderColor,
      rounded: rounded && typeof rounded === 'boolean',
      [`rounded-${rounded}`]: rounded && typeof rounded !== 'boolean',
      [`rounded-${String(borderRadius)}`]: borderRadius,
      [`border-opacity-${borderOpacity}`]: borderOpacity,
      [`text-${color}`]: color,
      [`text-opacity-${textOpacity}`]: textOpacity,
      [joinPropArray(display, 'd-')]: display,
      [joinPropArray(flexDirection, 'flex-')]: flexDirection,
      [joinPropArray(justifyContent, 'justify-content-')]: justifyContent,
      [joinPropArray(alignItems, 'align-items-')]: alignItems,
      [joinPropArray(alignSelf, 'align-self-')]: alignSelf,
      [joinPropArray(flex, 'flex-')]: flex,
      [joinPropArray(flexWrap, 'flex-wrap-')]: flexWrap,
      [joinPropArray(String(order), 'order-')]: order,
      [joinPropArray(alignContent, 'align-content-')]: alignContent,

      [joinPropArray(float, 'float-')]: float,

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
    },
    className
  );

  return [utilityClasses, componentProps] as const;
}
