import React, { createContext, useContext } from 'react';
import cn from 'classnames';
import { nanoid } from 'nanoid';

const AccordionContext = createContext(nanoid());
const AccordionItemContext = createContext(nanoid());

export type Props = React.HTMLAttributes<HTMLElement>;

export type AccordionProps = {
  flush?: boolean;
} & Props;

export const Accordion = ({ flush, ...props }: AccordionProps) => {
  const wrapperId = nanoid();

  return (
    <AccordionContext.Provider value={wrapperId}>
      <div {...props}>
        <div
          className={cn('accordion', {
            'accordion-flush': flush
          })}
          id={wrapperId}
        >
          {props.children}
        </div>
      </div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem = ({ ...props }: Props) => {
  return (
    <AccordionItemContext.Provider value={nanoid()}>
      <div className="accordion-item" {...props}>
        {props.children}
      </div>
    </AccordionItemContext.Provider>
  );
};

export const AccordionHeader = ({ ...props }: Props) => {
  const id = useContext(AccordionItemContext);

  return (
    <div {...props}>
      <h2 className="accordion-header" id={`header-${id}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${id}`}
          aria-expanded="false"
          aria-controls={id}
        >
          {props.children}
        </button>
      </h2>
    </div>
  );
};

export type AccordionBodyProps = {
  stayOpen?: boolean;
} & Props;

export const AccordionBody = ({ stayOpen, ...props }: AccordionBodyProps) => {
  const id = useContext(AccordionItemContext);
  const wrapperId = useContext(AccordionContext);

  return (
    <div {...props}>
      <div
        className="accordion-collapse collapse"
        id={`collapse-${id}`}
        aria-labelledby={`header-${id}`}
        data-bs-parent={stayOpen ? false : `#${wrapperId}`}
      >
        <div className="accordion-body">{props.children}</div>
      </div>
    </div>
  );
};
