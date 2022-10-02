import React, { useContext, useState, useEffect } from 'react';
import { CollapseContext } from './Collapse'
import Button, { type ButtonProps } from './Button'

type CollapseButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & ButtonProps

const CollapseButton = React.forwardRef(
  (
    {
      as = 'button',
      onClick,
      ...props
    }: CollapseButtonProps,
    ref: React.Ref<any>
  ) => {

    const [collapseState] = useContext(CollapseContext);
    const [toggle, setToggle] = useState(false);
  
    useEffect(() => {
      if (toggle) {
        collapseState?.show();
      } else {
        collapseState?.hide();
      }
    }, [toggle]);
  
    const handleToggle = () => setToggle((state) => !state);

    return (
      <Button
        as={as}
        onClick={(e) => {
          handleToggle();
          onClick && onClick(e);
        }}
        aria-expanded={toggle}
        ref={ref}
        {...props}
      >
        {props.children}
      </Button>
    );
  }
);

export default CollapseButton;