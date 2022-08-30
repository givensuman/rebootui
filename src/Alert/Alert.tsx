import React, { createContext, useContext } from 'react';
import cn from 'classnames';

export type AlertProps = {
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link';
  dismissable?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const AlertContext = createContext('primary');

export const Alert = ({
  variant = 'primary',
  dismissable,
  ...props
}: AlertProps) => {
  return (
    <AlertContext.Provider value={variant}>
      <div
        {...props}
        className={cn('alert', {
          [`alert-${variant}`]: variant
        })}
        role="alert"
      >
        {props.children}
        {dismissable && (
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          />
        )}
      </div>
    </AlertContext.Provider>
  );
};

export const AlertLink = ({
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const variant = useContext(AlertContext);

  return (
    <a
      {...props}
      className={cn({
        [`alert-${variant}`]: variant
      })}
    >
      {props.children}
    </a>
  );
};

export const AlertHeading = ({
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h4 {...props} className="alert-heading">
      {props.children}
    </h4>
  );
};

export const AlertBody = ({
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return <p {...props}>{props.children}</p>;
};
