import React, { useState } from "react";
import { createPortal } from "react-dom";
import FocusTrap from "focus-trap-react";
import cx from "classnames";
import { IconX } from "views/objects";
import "./Modal.scss";

type Props = {
  isOpen?: boolean;
  size?: "sm" | "md";
  triggerLabel: React.ReactNode;
  closeLabel?: string;
  className?: string | string[] | { [key: string]: boolean };
  attributes?: boolean | number | string;
  children: React.ReactNode;
};

const Modal: React.FC<Props> = ({
  isOpen,
  size = "md",
  triggerLabel,
  closeLabel = "Close Modal",
  className,
  children,
  ...attributes
}) => {
  const [open, setOpen] = useState(isOpen);

  const toggleScrollLock = () =>
    document.querySelector("html")?.classList.toggle("u-scroll-lock");

  const openModal = () => {
    setOpen(true);
    toggleScrollLock();
  };

  const closeModal = () => {
    setOpen(false);
    toggleScrollLock();
  };

  const handleEscKey = (event: React.KeyboardEvent) =>
    event.keyCode === 27 && closeModal();

  const handleOutsideClick = (event: React.MouseEvent) =>
    event.target === event.currentTarget && closeModal();

  return (
    <>
      <button
        onClick={openModal}
        className={cx("o-modal__trigger", className)}
        type="button"
        {...attributes}
      >
        {triggerLabel}
      </button>

      {!open
        ? null
        : createPortal(
            <FocusTrap>
              <div
                role="dialog"
                tabIndex={-1}
                aria-modal="true"
                className="o-modal__cover u-animation u-animation--fast u-animation--fade-in"
                onClick={handleOutsideClick}
                onKeyDown={handleEscKey}
              >
                <div
                  className={cx(
                    "o-modal",
                    "container",
                    size && `container--${size}`
                  )}
                >
                  <button
                    className="o-modal__close-button"
                    onClick={closeModal}
                    aria-label={closeLabel}
                  >
                    <IconX />
                  </button>
                  <div className="o-modal__body">{children}</div>
                </div>
              </div>
            </FocusTrap>,
            document.body
          )}
    </>
  );
};

export default Modal;
