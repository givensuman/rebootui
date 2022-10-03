import React, { useRef, useLayoutEffect } from 'react';
import Box from './Box';
import { type GlobalProps } from './_reboot/types';
import '@popperjs/core'
import { Tooltip as bsTooltip } from 'bootstrap'

type TooltipProps = {
  label: string;
  placement?: 'top' | 'right' | 'bottom' | 'left';
  delay?: number;
} & GlobalProps & React.HTMLAttributes<HTMLSpanElement>

const Tooltip = React.forwardRef(
  (
    {
      as = 'span',
      className,
      label,
      placement = 'top',
      delay = 0,
      ...props
    }: TooltipProps,
    ref: React.Ref<any>
  ) => {

    const tooltipRef = useRef<any>(ref);

    useLayoutEffect(() => {
      new bsTooltip(tooltipRef.current, {
        boundary: document.body,
        delay: delay,
        placement: placement,
        title: label
      });
    }, [tooltipRef, delay, placement, label]);

    return (
      <Box
        as={as}
        data-bs-toggle="tooltip"
        ref={tooltipRef}
        {...props}
      >
        {props.children}
      </Box>
    );
  }
);

export default Tooltip;