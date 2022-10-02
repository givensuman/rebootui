import React, { useContext, useEffect, useRef } from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';
import { Collapse } from 'bootstrap';
import { CollapseContext } from './Collapse';

type CollapseBodyProps = {
  horizontal?: boolean;
  toggle?: boolean;
} & GlobalProps &
  React.HTMLAttributes<HTMLDivElement>;

const CollapseBody = React.forwardRef(
  (
    { as = 'div', className, horizontal, toggle, ...props }: CollapseBodyProps,
    ref: React.Ref<any>
  ) => {
    const [_, setCollapseState] = useContext(CollapseContext);

    const collapseRef = useRef<any>(ref);

    useEffect(() => {
      if (collapseRef.current) {
        setCollapseState(
          new Collapse(collapseRef.current, {
            toggle: toggle
          })
        );
      }
    }, [collapseRef, toggle]);

    return (
      <Box
        as={as}
        className={classnames('collapse', {
          'collapse-horizontal': horizontal
        }, className)}
        ref={collapseRef}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default CollapseBody;
