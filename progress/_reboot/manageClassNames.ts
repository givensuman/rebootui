import { CSSObject } from '@emotion/react';
import classnames, { type Argument } from 'classnames';

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

export type Props = {
  text?: TextType[] | TextType;
  fontSize?: '1' | '2' | '3' | '4' | '5' | '6' | 1 | 2 | 3 | 4 | 5 | 6;
  fontWeight?: 'bold' | 'bolder' | 'semibold' | 'normal' | 'light' | 'lighter';
  fontStyle?: 'italic' | 'normal';
  lineHeight?: '1' | 'sm' | 'base' | 'lg' | 1;
  monospace?: boolean;
  textDecoration?: 'underline' | 'line-through' | 'none';
  align?: 'baseline' | 'top' | 'middle' | 'bottom' | 'text-top' | 'text-bottom';
  visibility?: 'visible' | 'invisible';
  // Space for css prop
  css?: string | CSSObject;
} & SpacingProps;

const joinPropArray = (input: string[] | string = '', prefix: string) => {
  if (Array.isArray(input)) {
    return input.map((prop) => prefix + prop).join(' ');
  } else {
    return prefix + input;
  }
};

export default function manageClassNames(props: Props, ...rest: Argument[]) {
  return classnames(...rest, {
    // Creates a class for every possible prop result of spacing prefixes, e.g. my="xl-5" or gap="2"
    ...spacingPrefixes.reduce(
      (a, b) => ({
        ...a,
        [joinPropArray(props[b], `${b}-`)]: props[b]
      }),
      {}
    ),
    [joinPropArray(props.text, 'text-')]: props.text,
    [`fs-${props.fontSize}`]: props.fontSize,
    [`fw-${props.fontWeight}`]: props.fontWeight,
    [`fst-${props.fontStyle}`]: props.fontStyle,
    [`lh-${props.lineHeight}`]: props.lineHeight,
    'font-monospace': props.monospace,
    [`text-decoration-${props.textDecoration}`]: props.textDecoration,
    [`align-${props.align}`]: props.align,
    [`${props.visibility}`]: props.visibility
  });
}
