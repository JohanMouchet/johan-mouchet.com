// @flow

import * as React from "react";
import cx from "classnames";
import "./Alert.scss";

type Props = {
  type?: "info" | "success" | "warning" | "danger",
  content?: Node,
  hidden: boolean,
  closable?: boolean,
  metadata?: {
    contextClass?: string,
    additionalClasses?: Array<string>
  }
};

const Alert = (props: Props) => {
  const { type, content, hidden, closable, metadata = {} } = props;

  const AlertClass = cx(
    "o-alert",
    `o-alert--${type}`,
    {
      "is--visible": !hidden,
      "js-alert": closable
    },
    "wow",
    metadata.contextClass,
    metadata.additionalClasses
  );

  const getIcon = type => {
    if (type === "info") {
      return "info";
    } else if (type === "success") {
      return "check_circle";
    } else if (type === "warning") {
      return "warning";
    } else if (type === "danger") {
      return "error";
    }
  };

  return (
    <div className={AlertClass}>
      <i className="o-alert__icon material-icons">{getIcon(type)}</i>
      <div className="o-alert__content">{content}</div>
      {closable && (
        <button className="o-alert__close js-alert-close">&#x2716;</button>
      )}
    </div>
  );
};

Alert.defaultProps = {
  type: "info"
};

export default Alert;
