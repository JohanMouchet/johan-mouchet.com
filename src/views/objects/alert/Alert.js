// @flow

import * as React from "react";
import cx from "classnames";
import "./Alert.scss";

type Props = {
  hidden: boolean,
  closable?: boolean,
  variant?: "info" | "success" | "warning" | "danger",
  className?: string | Array<string> | Object,
  children: Node
};

const Alert = ({
  hidden,
  closable,
  variant = "info",
  className,
  children
}: Props) => {
  const classNames = cx(
    "o-alert",
    variant && `o-alert--${variant}`,
    !hidden && "is--visible",
    closable && "js-alert",
    "wow",
    className
  );

  const getIcon = variant => {
    if (variant === "info") {
      return "info";
    } else if (variant === "success") {
      return "check_circle";
    } else if (variant === "warning") {
      return "warning";
    } else if (variant === "danger") {
      return "error";
    }
  };

  return (
    <div className={classNames}>
      <i className="o-alert__icon material-icons">{getIcon(variant)}</i>
      <div className="o-alert__content">{children}</div>
      {closable && (
        <button className="o-alert__close js-alert-close">&#x2716;</button>
      )}
    </div>
  );
};

export default Alert;
