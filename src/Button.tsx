/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react';
import { jsx } from '@emotion/react';
import classnames from 'classnames';
import handleCssProp, { type CssProp } from './_reboot/handleCssProp';
import handleUtilityClasses, { type UtilityProps } from './_reboot/handleUtilityClasses';
import { type Variant, type Size } from './_reboot/types';

type ButtonProps = {
  variant?: Variant | 'link';
  type?: 'button' | 'submit' | 'reset';
  outlined?: boolean;
  size?: Size;
  disabled?: boolean;
  active?: boolean;
} & React.HTMLAttributes<HTMLButtonElement> &
  UtilityProps & CssProp;

const Button = React.forwardRef(
  (
    {
      variant = 'primary',
      type,
      outlined,
      size,
      disabled,
      active,

      css,
      ...props
    }: ButtonProps,
    ref: React.Ref<any>
  ) => {
    const [ utilityClasses, filteredProps ] =
      handleUtilityClasses<ButtonProps>(props);

    return (
      <button
        className={classnames(
          'btn',
          {
            [`btn-${variant}`]: variant && !outlined,
            [`btn-outline-${variant}`]: outlined,
            [`btn-${size}`]: size,
            disabled: disabled,
            active: active
          },
          utilityClasses
        )}
        type={type}
        disabled={disabled}
        aria-pressed={active}
        aria-disabled={disabled}
        role="button"
        css={handleCssProp(css)}
        ref={ref}
        {...filteredProps}
      >
        {props.children}
      </button>
    );
  }
);

export default Button;
