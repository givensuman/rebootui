import React from 'react';
import { type CssProp } from './handleCssProp';
import { type UtilityProps } from './handleUtilityClasses';

export type GlobalProps = {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
} & CssProp &
  UtilityProps;

export type Variant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark';

export type Size = 'lg' | 'sm';

export type Breakpoints = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
