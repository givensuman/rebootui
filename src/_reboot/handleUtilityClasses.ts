// Creates a prop for every Bootstrap utility class and handles their rendering with the classnames library
// https://getbootstrap.com/docs/5.2/utilities/api/

import classnames, { type Argument } from 'classnames';
import { type Variant, type Size } from './types';

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

type NumOrString<T extends number> = T | `${T}`;

type SpacingType =
  | 'auto'
  | NumOrString<1 | 2 | 3 | 4 | 5>
  | `${Breakpoints}-${'1' | '2' | '3' | '4' | '5'}`;

type Opacities = NumOrString<10 | 25 | 50 | 75 | 100>;

// https://getbootstrap.com/docs/5.2/utilities/spacing/
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

type BorderType = NumOrString<1 | 2 | 3 | 4 | 5> | boolean;

// https://getbootstrap.com/docs/5.2/utilities/borders/
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

type OrderValue = NumOrString<1 | 2 | 3 | 4 | 5> | 'first' | 'last';
type OrderType = OrderValue | `${Breakpoints}-${OrderValue}`;

type FloatType = `${Breakpoints}-${'start' | 'end' | 'none'}`;

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
  // https://getbootstrap.com/docs/5.2/utilities/background/
  bg?: Variant | 'white' | 'transparent' | 'body';
  bgOpacity?: Opacities;
  bgGradient?: boolean;

  // https://getbootstrap.com/docs/5.2/utilities/borders/
  borderColor?: Variant | 'white';
  rounded?: boolean | 'top' | 'end' | 'bottom' | 'start' | 'circle' | 'pill';
  borderRadius?: NumOrString<0 | 1 | 2 | 3 | 4 | 5>;
  borderOpacity?: Opacities;

  // https://getbootstrap.com/docs/5.2/utilities/colors/
  color?: Variant | 'body' | 'muted' | 'white';
  textOpacity?: Opacities;

  // https://getbootstrap.com/docs/5.2/utilities/display/
  display?: DisplayType | DisplayType[];

  // https://getbootstrap.com/docs/5.2/utilities/flex/
  flexDirection?: FlexDirectionType | FlexDirectionType[];
  justifyContent?: JustifyContentType | JustifyContentType[];
  alignItems?: AlignType | AlignType[];
  alignSelf?: AlignType | AlignType[];
  flex?: FlexProps | FlexProps[];
  flexWrap?: FlexWrapType | FlexWrapType[];
  order?: OrderType | OrderType[];
  alignContent?: AlignContentType | AlignContentType[];

  // https://getbootstrap.com/docs/5.2/utilities/float/
  float?: FloatType | FloatType[];

  // https://getbootstrap.com/docs/5.2/utilities/interactions/
  userSelect?: 'all' | 'auto' | 'none',
  pointerEvents?: 'auto' | 'none',

  // https://getbootstrap.com/docs/5.2/utilities/opacity/
  opacity?: NumOrString<25 | 50 | 75 | 100>,

  // https://getbootstrap.com/docs/5.2/utilities/overflow/
  overflow?: 'auto' | 'hidden' | 'visible' | 'scroll',

  // https://getbootstrap.com/docs/5.2/utilities/position/
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky',
  top?: NumOrString<0 | 50 | 100>,
  start?: NumOrString<0 | 50 | 100>,
  bottom?: NumOrString<0 | 50 | 100>,
  end?: NumOrString<0 | 50 | 100>,
  translate?: 'middle' | 'middle-x' | 'middle-y'

  // https://getbootstrap.com/docs/5.2/utilities/shadows/
  shadow?: 'none' | Size | boolean

  // https://getbootstrap.com/docs/5.2/utilities/sizing/
  width?: NumOrString<25 | 50 | 75 | 100> | 'auto' | '100vw',
  height?: NumOrString<25 | 50 | 75 | 100> | 'auto' | '100vh',
  maxWidth?: NumOrString<100> | boolean,
  maxHeight?: NumOrString<100> | boolean,
  minWidth?: '100vw' | boolean,
  minHeight?: '100vh' | boolean,

  // https://getbootstrap.com/docs/5.2/utilities/text/
  text?: TextType[] | TextType;
  fontSize?: NumOrString<1 | 2 | 3 | 4 | 5 | 6>;
  fontWeight?: 'bold' | 'bolder' | 'semibold' | 'normal' | 'light' | 'lighter';
  fontStyle?: 'italic' | 'normal';
  lineHeight?: NumOrString<1> | 'base' | Size;
  monospace?: boolean;
  textDecoration?: 'underline' | 'line-through' | 'none';

  // https://getbootstrap.com/docs/5.2/utilities/vertical-align/
  align?: 'baseline' | 'top' | 'middle' | 'bottom' | 'text-top' | 'text-bottom';
  
  // https://getbootstrap.com/docs/5.2/utilities/visibility/
  visibility?: 'visible' | 'invisible';

  // Just the className prop, will be merged into classnames function below
  className?: string;
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
    float,
    userSelect,
    pointerEvents,
    opacity,
    overflow,
    position,
    top,
    start,
    bottom,
    end,
    translate,
    shadow,
    width,
    height,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
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
      // Background
      [`bg-${bg}`]: bg,
      'bg-gradient': bgGradient,
      [`bg-${bgOpacity}`]: bgOpacity,
      border: border && typeof border === 'boolean',

      // Borders
      [`border border-${String(border)}`]:
        border && typeof border !== 'boolean',
      [`border-top-${String(borderTop)}`]: borderTop,
      [`border-bottom-${String(borderBottom)}`]: borderBottom,
      [`border-start-${String(borderStart)}`]: borderStart,
      [`border-end-${String(borderEnd)}`]: borderEnd,
      [`border-${borderColor}`]: borderColor,
      'rounded': rounded && typeof rounded === 'boolean',
      [`rounded-${rounded}`]: rounded && typeof rounded !== 'boolean',
      [`rounded-${String(borderRadius)}`]: borderRadius,
      [`border-opacity-${borderOpacity}`]: borderOpacity,

      // Colors
      [`text-${color}`]: color,
      [`text-opacity-${textOpacity}`]: textOpacity,

      // Display property
      [joinPropArray(display, 'd-')]: display,

      // Flex
      [joinPropArray(flexDirection, 'flex-')]: flexDirection,
      [joinPropArray(justifyContent, 'justify-content-')]: justifyContent,
      [joinPropArray(alignItems, 'align-items-')]: alignItems,
      [joinPropArray(alignSelf, 'align-self-')]: alignSelf,
      [joinPropArray(flex, 'flex-')]: flex,
      [joinPropArray(flexWrap, 'flex-wrap-')]: flexWrap,
      [joinPropArray(String(order), 'order-')]: order,
      [joinPropArray(alignContent, 'align-content-')]: alignContent,

      // Float
      [joinPropArray(float, 'float-')]: float,

      // Interactions
      [`user-select-${userSelect}`]: userSelect,
      [`pe-${pointerEvents}`]: pointerEvents,

      // Opacity
      [`opacity-${opacity}`]: opacity,

      // Overflow
      [`overflow-${overflow}`]: overflow,

      // Position
      [`position-${position}`]: position,
      [`top-${top}`]: top,
      [`start-${start}`]: start,
      [`bottom-${bottom}`]: bottom,
      [`end-${end}`]: end,
      [`translate-${translate}`]: translate,

      // Shadow
      'shadow': shadow && typeof shadow === 'boolean',
      [`shadow-${shadow}`]: shadow && typeof shadow !== 'boolean',

      // Sizing
      [(
        width === '100vw'
        ? 'vw-100'
        : `w-${width}`
      )]: width,
      [(
        height === '100vh'
        ? 'vh-100'
        : `h-${height}`
      )]: height,
      'min-vw-100': minWidth,
      'min-vh-100': minHeight,
      'mw-100': maxWidth,
      'mh-100': maxHeight,

      // Spacing
      // Creates a class for every possible prop result of spacing prefixes, e.g. my="xl-5" or gap="2"
      ...spacingPrefixes.reduce(
        (a, b) => ({
          ...a,
          [joinPropArray(props[b], `${b}-`)]: props[b]
        }),
        {}
      ),

      // Text
      [joinPropArray(text, 'text-')]: text,
      [`fs-${fontSize}`]: fontSize,
      [`fw-${fontWeight}`]: fontWeight,
      [`fst-${fontStyle}`]: fontStyle,
      [`lh-${lineHeight}`]: lineHeight,
      'font-monospace': monospace,
      [`text-decoration-${textDecoration}`]: textDecoration,

      // Vertical alignment
      [`align-${align}`]: align,

      // Visibility
      [`${visibility}`]: visibility
    },
    // Add className prop into utility class render, as it trips up Emotion.js when not handled
    className
  );

  return [utilityClasses, componentProps] as const;
}
