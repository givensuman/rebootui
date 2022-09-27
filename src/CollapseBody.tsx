/** @jsx jsx */
/** @jsxRuntime classic */
import React, { useRef, useEffect, useContext } from 'react';
import classnames from 'classnames';
import { jsx } from '@emotion/react';
import handleCssProp, { type CssProp } from './_reboot/handleCssProp';
import handleUtilityClasses, {
  type UtilityProps
} from './_reboot/handleUtilityClasses';

import { Collapse } from 'bootstrap';
import { CollapseContext } from './Collapse';

type CollapseBodyProps = {
  horizontal?: boolean;
} & React.HTMLAttributes<HTMLElement> &
  UtilityProps &
  CssProp;

const CollapseBody = ({
  horizontal,

  css,
  ...props
}: CollapseBodyProps) => {
  const [utilityClasses, filteredProps] = handleUtilityClasses(props);

  const [_, setCollapseState] = useContext(CollapseContext);

  const collapseRef = useRef<any>(null);

  useEffect(() => {
    setCollapseState(
      new Collapse(collapseRef.current, {
        toggle: false
      })
    );
  }, [collapseRef]);

  return (
    <div
      className={classnames(
        'collapse',
        {
          'collapse-horizontal': horizontal
        },
        utilityClasses
      )}
      css={handleCssProp(css)}
      ref={collapseRef}
      {...filteredProps}
    >
      {props.children}
    </div>
  );
};

export default CollapseBody;
