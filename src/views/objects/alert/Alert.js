// @flow

import * as React from "react";
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
  hidden: boolean,
  closable?: boolean,
  variant?: "info" | "success" | "warning" | "danger",
  className?: string | Array<string> | Object,
  children: Node,
};

const Alert = ({
  hidden,
  closable,
  variant = "info",
  className,
  children,
}: Props) => {
  const classNames = cx(
    "o-alert",
    variant && `o-alert--${variant}`,
    !hidden && "is--visible",
    closable && "js-alert",
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
    <div className={classNames}>
      <span className="o-alert__icon">{getIcon(variant)}</span>
      <div className="o-alert__content">{children}</div>
      {closable && (
        <button className="o-alert__close js-alert-close">
          <IconX />
        </button>
      )}
    </div>
  );
};

export default Alert;
