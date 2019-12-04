// @flow

import * as React from "react";
import cx from "classnames";
import "./Alert.scss";

type Props = {
  content?: Node,
  hidden: boolean,
  closable?: boolean,
  variant?: "info" | "success" | "warning" | "danger",
  extraClasses?: string | Array | Object
};

const Alert = (props: Props) => {
  const { content, hidden, closable, variant, extraClasses } = props;

  const AlertClass = cx(
    "o-alert",
    `o-alert--${variant}`,
    {
      "is--visible": !hidden,
      "js-alert": closable
    },
    "wow",
    extraClasses
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
    <div className={AlertClass}>
      <i className="o-alert__icon material-icons">{getIcon(variant)}</i>
      <div className="o-alert__content">{content}</div>
      {closable && (
        <button className="o-alert__close js-alert-close">&#x2716;</button>
      )}
    </div>
  );
};

Alert.defaultProps = {
  variant: "info"
};

export default Alert;
