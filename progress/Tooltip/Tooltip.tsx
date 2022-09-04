import React, { useEffect, useRef } from 'react';
import { Tooltip as bsTooltip } from 'bootstrap';

export type TooltipProps = {
  label: string;
  placement?: 'top' | 'right' | 'bottom' | 'left';
} & React.HTMLAttributes<HTMLElement>;

export const Tooltip = ({
  label,
  placement = 'top',
  ...props
}: TooltipProps) => {
  const tooltipRef = useRef<any>();
  useEffect(() => {
    const tooltip = new bsTooltip(tooltipRef.current, {
      title: 'hi',
      placement: placement,
      trigger: 'hover'
    });
  });

  return (
    <div ref={tooltipRef} {...props}>
      {props.children}
    </div>
  );
};
