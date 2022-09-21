import { jsx, css, type CSSObject } from '@emotion/react';

export type CssProp = string | CSSObject;

export default function handleCssProp(cssProp?: CssProp) {
  return typeof cssProp === 'string'
    ? css`
        ${cssProp}
      `
    : cssProp;
}
