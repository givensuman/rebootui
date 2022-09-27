/** @jsx jsx */
/** @jsxRuntime classic */
import React, { useRef, useEffect } from 'react';
import classnames from 'classnames';
import { jsx } from '@emotion/react';
import handleCssProp, { type CssProp } from './_reboot/handleCssProp';
import handleUtilityClasses, {
  type UtilityProps
} from './_reboot/handleUtilityClasses';

import Button, { type ButtonProps } from './Button';
import { Dropdown as bsDropdown } from 'bootstrap';

type DropdownButtonProps = {
  className?: string;
} & ButtonProps;

const DropdownButton = React.forwardRef(
  (
    {
      className = '',

      ...props
    }: DropdownButtonProps,
    ref: React.Ref<any>
  ) => {
    const dropdownRef = useRef<any>(ref);

    useEffect(() => {
      new bsDropdown(dropdownRef.current);
    }, [dropdownRef]);

    return (
      <Button
        className={`${className} dropdown-toggle`}
        data-bs-toggle="dropdown"
        aria-expanded="false"
        ref={dropdownRef}
        {...props}
      >
        {props.children}
      </Button>
    );
  }
);

export default DropdownButton;
