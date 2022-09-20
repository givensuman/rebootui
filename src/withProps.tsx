/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react';
import { jsx, type CSSObject } from '@emotion/react';
import cssProperties from 'known-css-properties';

type Props = Partial<React.CSSProperties> & {
  css?: string | CSSObject;
  className?: string;
}

const cssStringToObject = (css: string): CSSObject => {
  const r = /(?<=^|;)\s*([^:]+)\s*:\s*([^;]+)\s*/g,
    o = {};
  css.replace(
    r,
    (_, p, v) => (o[p.replace(/-(.)/g, (m, p) => p.toUpperCase())] = v)
  );
  return o;
};

const camelCaseToKebabCase = (input: string): string =>
  input.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? '-' : '') + $.toLowerCase()
  );

export default function withProps<T>(Component) {
  return (props: T & Props) => (
    // @ts-ignore
    // Emotion HOC type error bug
    <Component
      {...Object.fromEntries(
        Object.entries(props).filter(
          ([key]) => !cssProperties.all.includes(camelCaseToKebabCase(key))
        )
      )}
      css={{
        ...props,
        ...(props.css &&
          (typeof props.css === 'string'
            ? cssStringToObject(props.css)
            : props.css))
      }}
    />
  );
}
