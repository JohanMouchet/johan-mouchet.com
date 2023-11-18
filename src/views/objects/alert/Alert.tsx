import React from "react";
import { useState } from "react";
import cx from "classnames";
import {
  IconCheckCircle,
  IconExclamationCircle,
  IconExclamationTriangle,
  IconInfoCircle,
  IconX,
} from "views/objects";
import styles from "./Alert.module.scss";

type Props = {
  isOpen?: boolean;
  closable?: boolean;
  variant?: "info" | "success" | "warning" | "danger";
  position?: "fixed-bottom" | "fixed-bottom-right";
  className?: string | string[] | { [key: string]: boolean };
  children: React.ReactNode;
};

const Alert: React.FC<Props> = ({
  isOpen = true,
  closable,
  variant = "info",
  position,
  className,
  children,
}) => {
  const [open, setOpenState] = useState(isOpen);

  const classNames = cx(
    styles["o-alert"],
    closable && styles["o-alert--closable"],
    variant && styles[`o-alert--${variant}`],
    position && styles[`o-alert--${position}`],
    "container",
    "u-animation",
    "u-animation--fade-in-up",
    className
  );

  const getIcon = (variant: string) => {
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

  return !open ? null : (
    <div className={classNames}>
      <div className="grid grid--noWrap-@xs">
        <div
          className={cx(styles["o-alert__icon"], "cell")}
          aria-label={variant}
        >
          {getIcon(variant)}
        </div>
        <div className={cx(styles["o-alert__content"], "cell", "cell--@xs")}>
          {children}
        </div>
        {closable && (
          <div className={cx(styles["o-alert__close"], "cell")}>
            <button
              className={styles["o-alert__close-button"]}
              aria-label="Close"
              onClick={() => setOpenState(!open)}
              type="button"
            >
              <IconX />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alert;
