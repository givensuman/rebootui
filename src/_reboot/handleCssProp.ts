import { css, type CSSObject } from '@emotion/react';

export type CssProp = {
  css?: string | CSSObject;
};

export default function handleCssProp(cssProp?: string | CSSObject) {
  if (!cssProp) return null;
  return typeof cssProp === 'string'
    ? css`
        ${cssProp}
      `
    : cssProp;
}
