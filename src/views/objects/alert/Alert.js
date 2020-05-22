// @flow

import * as React from "react";
import { useState } from "react";
import cx from "classnames";
import {
  IconCheckCircle,
  IconExclamationCircle,
  IconExclamationTriangle,
  IconInfoCircle,
  IconX,
} from "views/objects";
import "./Alert.scss";

type Props = {
  isOpen?: boolean,
  closable?: boolean,
  variant?: "info" | "success" | "warning" | "danger",
  position?: "fixed-bottom" | "fixed-bottom-right",
  className?: string | Array<string> | Object,
  children: Node,
};

const Alert = ({
  isOpen = true,
  closable,
  variant = "info",
  position,
  className,
  children,
}: Props) => {
  const [open, setOpenState] = useState(isOpen);

  const classNames = cx(
    "o-alert",
    closable && "o-alert--closable",
    variant && `o-alert--${variant}`,
    position && `o-alert--${position}`,
    "container",
    "wow",
    className
  );

  const getIcon = (variant) => {
    if (variant === "info") {
      return <IconInfoCircle />;
    } else if (variant === "success") {
      return <IconCheckCircle />;
    } else if (variant === "warning") {
      return <IconExclamationTriangle />;
    } else if (variant === "danger") {
      return <IconExclamationCircle />;
    }
  };

  return (
    open && (
      <div className={classNames}>
        <div className="grid grid--noWrap-@xs">
          <div className="o-alert__icon cell">{getIcon(variant)}</div>
          <div className="o-alert__content cell cell--@xs">{children}</div>
          {closable && (
            <div className="o-alert__close cell">
              <button
                className="o-alert__close-button"
                aria-label="Close"
                onClick={() => setOpenState(!open)}
              >
                <IconX />
              </button>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default Alert;
