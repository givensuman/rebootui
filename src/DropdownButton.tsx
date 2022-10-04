import React, { useLayoutEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import Button, { type ButtonProps } from './Button'
import { Dropdown } from 'bootstrap'

type DropdownButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & ButtonProps

const DropdownButton = React.forwardRef(
  (
    {
      as = 'button',
      className,
      onClick,
      ...props
    }: DropdownButtonProps,
    ref: React.Ref<any>
  ) => {

    const dropdownRef = useRef<any>(ref)
    const [dropdownState, setDropdownState] = useState<any>(null)

    useLayoutEffect(() => {
      if (dropdownRef.current) {
        setDropdownState(new Dropdown(dropdownRef.current))
      }
    }, [dropdownRef])

    return (
      <Button
        as={as}
        className={classnames('dropdown-toggle', className)}
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={(e) => {
          dropdownState?.toggle()
          onClick && onClick(e)
        }}
        ref={dropdownRef}
        {...props}
      >
        {props.children}
      </Button>
    );
  }
);

export default DropdownButton;