import React, { createContext, useContext } from 'react';
import cn from 'classnames';
import { nanoid } from 'nanoid';

import Button from '../Button';
import { type ButtonProps } from '../Button/Button';

const CollapseContext = createContext(nanoid());

export const Collapse = ({ ...props }: { children: React.ReactNode }) => {
  const id = nanoid();

  return (
    <CollapseContext.Provider value={id}>
      {props.children}
    </CollapseContext.Provider>
  );
};

export const CollapseButton = ({ ...props }: ButtonProps) => {
  const id = useContext(CollapseContext);

  return (
    <Button
      data-bs-toggle="collapse"
      data-bs-target={`#${id}`}
      aria-expanded="false"
      aria-controls={id}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export type CollapseBodyProps = {
  horizontal?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const CollapseBody = ({ horizontal, ...props }: CollapseBodyProps) => {
  const id = useContext(CollapseContext);

  return (
    <div
      className={cn('collapse', {
        'collapse-horizontal': horizontal
      })}
      id={id}
      {...props}
    >
      {props.children}
    </div>
  );
};
