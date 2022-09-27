/** @jsx jsx */
/** @jsxRuntime classic */
import React from 'react';
import classnames from 'classnames';
import { jsx } from '@emotion/react';
import handleCssProp, { type CssProp } from './_reboot/handleCssProp';
import handleUtilityClasses, {
  type UtilityProps
} from './_reboot/handleUtilityClasses';

type CardTextProps = {} & React.HTMLAttributes<HTMLParagraphElement> &
  UtilityProps &
  CssProp;

const CardText = React.forwardRef(
  ({ css, ...props }: CardTextProps, ref: React.Ref<any>) => {
    const [utilityClasses, filteredProps] = handleUtilityClasses(props);

    return (
      <p
        className={classnames('card-text', utilityClasses)}
        css={handleCssProp(css)}
        ref={ref}
        {...filteredProps}
      >
        {props.children}
      </p>
    );
  }
);

export default CardText;
