import React, { createContext, useState } from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';

type CollapseProps = {} & GlobalProps;

export const CollapseContext = createContext<any>(null);

const Collapse = React.forwardRef(
  ({ as = 'div', ...props }: CollapseProps, ref: React.Ref<any>) => {
    const collapseState = useState(null);

    return (
      <Box
        as={as}
        ref={ref}
        {...props}
      >
        <CollapseContext.Provider value={collapseState}>
          {props.children}
        </CollapseContext.Provider>
      </Box>
    );
  }
);

export default Collapse;
