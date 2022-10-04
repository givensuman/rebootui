import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
import classnames from 'classnames';
import Box from './Box';
import { type GlobalProps, type Size } from './_reboot/types';
import { Modal as bsModal } from 'bootstrap';

type ModalProps = {
  show: boolean;
  backdrop?: boolean | 'static';
  focus?: boolean;
  keyboard?: boolean;
  scrollable?: boolean;
  centered?: boolean;
  size?: Size | 'xl';
  fullscreen?: boolean | Size | 'md' | 'xl' | 'xxl';
} & GlobalProps &
  React.HTMLAttributes<HTMLDivElement>;

const Modal = React.forwardRef(
  (
    {
      as = 'div',
      className,
      show,
      backdrop = true,
      focus = true,
      keyboard = true,
      scrollable,
      centered,
      size,
      fullscreen,
      ...props
    }: ModalProps,
    ref: React.Ref<any>
  ) => {
    const modalRef = useRef<any>(ref);
    const [modalState, setModalState] = useState<any>(null);

    useLayoutEffect(() => {
      if (modalRef.current) {
        setModalState(
          new bsModal(modalRef.current, {
            backdrop: backdrop,
            focus: focus,
            keyboard: keyboard
          })
        );
      }
    }, [modalRef, backdrop, focus, keyboard]);

    useEffect(() => {
      if (modalState) {
        if (show) {
          modalState?.show();
        } else {
          modalState?.hide();
        }
      }
    }, [show]);

    return (
      <Box as={as} className={classnames('modal')} ref={modalRef} {...props}>
        <div
          className={classnames('modal-dialog', {
            'modal-dialog-scrollable': scrollable,
            'modal-dialog-centered': centered,
            [`modal-${size}`]: size,
            'modal-fullscreen': fullscreen && typeof fullscreen === 'boolean',
            [`modal-fullscreen-${fullscreen}-down`]:
              fullscreen && typeof fullscreen === 'string'
          })}
        >
          <div className="modal-content">{props.children}</div>
        </div>
      </Box>
    );
  }
);

export default Modal;
