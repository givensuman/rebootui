/** @jsx jsx */
/** @jsxRuntime classic */
import React, { useState, useEffect, useContext } from 'react';
import classnames from 'classnames';
import { jsx } from '@emotion/react';
import handleCssProp, { type CssProp } from './_reboot/handleCssProp';
import handleUtilityClasses, {
  type UtilityProps
} from './_reboot/handleUtilityClasses';

import Button, { type ButtonProps } from './Button';
import { CollapseContext } from './Collapse';

type CollapseButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & ButtonProps;

const CollapseButton = ({
  onClick,

  ...props
}: CollapseButtonProps) => {
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
      onClick={(e) => {
        handleToggle();
        onClick && onClick(e);
      }}
      aria-expanded={toggle}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default CollapseButton;
