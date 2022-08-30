import React from 'react';
import cn from 'classnames';

export type CloseButtonProps = {
  white?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

export const CloseButton = ({ white, ...props }: CloseButtonProps) => {
  return (
    <button
      className={cn('btn-close', {
        'btn-close-white': white
      })}
      type="button"
      aria-label="Close"
      {...props}
    />
  );
};
