import {
  IconCheckCircle,
  IconExclamationCircle,
  IconExclamationTriangle,
  IconInfoCircle,
  IconX,
} from "@/views/objects/icons";
import clsx, { ClassValue } from "clsx";
import { useState } from "react";
import styles from "./Alert.module.scss";

export const Alert = ({
  isOpen = true,
  closable,
  variant = "info",
  position,
  children,
  className,
  ...props
}: {
  isOpen?: boolean;
  closable?: boolean;
  variant?: "info" | "success" | "warning" | "danger";
  position?: "fixed-bottom" | "fixed-bottom-right";
  children: React.ReactNode;
  className?: ClassValue;
} & React.HTMLProps<HTMLDivElement>) => {
  const [open, setOpenState] = useState(isOpen);

  const classNames = clsx(
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
    <div className={classNames} {...props}>
      <div className="grid grid-no-wrap">
        <div
          className={clsx(styles["o-alert__icon"], "cell")}
          aria-label={variant}
        >
          {getIcon(variant)}
        </div>
        <div className={clsx(styles["o-alert__content"], "cell", "cell-grow")}>
          {children}
        </div>
        {closable && (
          <div className={clsx(styles["o-alert__close"], "cell")}>
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
