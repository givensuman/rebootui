import { jsx, css, type CSSObject } from '@emotion/react';

export type CssProp = {
  css?: string | CSSObject
}

export default function handleCssProp(cssProp?: string | CSSObject) {
  return typeof cssProp === 'string'
    ? css`
        ${cssProp}
      `
    : cssProp;
}
