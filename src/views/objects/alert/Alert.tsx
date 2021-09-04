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
    styles["alert"],
    closable && styles["alert--closable"],
    variant && styles[`alert--${variant}`],
    position && styles[`alert--${position}`],
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
        <div className={`${styles.icon} cell`} aria-label={variant}>
          {getIcon(variant)}
        </div>
        <div className={`${styles.content} cell cell--@xs`}>{children}</div>
        {closable && (
          <div className={`${styles.close} cell`}>
            <button
              className={styles["close-button"]}
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
