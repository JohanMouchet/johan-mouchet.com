// @flow

import * as React from "react";
import cx from "classnames";
import "./alert.scss";

type Props = {
  type?: string,
  hidden: boolean,
  closable?: boolean,
  metadata: {
    contextClass?: string,
    additionalClasses?: Array<string>
  }
};

const Alert = (props: Props, children) => {
  const { prop1, prop2 } = props;

  const AlertClass = cx(
    "o-alert",
    props.metadata.contextClass,
    props.metadata.additionalClasses,
    {
      "Alert--prop1": prop1
    }
  );

  let icon = type => {
    switch (type) {
      case "info":
        icon = "info";
        break;
      case "success":
        icon = "check_circle";
        break;
      case "warning":
        icon = "warning";
        break;
      case "danger":
        icon = "error";
        break;
      default:
        icon = "info";
    }
  };

  return (
    <div
      className={`${AlertClass} o-alert--${props.type} ${!props.hidden &&
        "is--visible"} ${props.closable && "js-alert"} wow`}
    >
      <i className="o-alert__icon material-icons">{icon}</i>
      <div className="o-alert__content">{children}</div>
      {props.closable && (
        <button className="o-alert__close js-alert-close">&#x2716;</button>
      )}
    </div>
  );
};

Alert.defaultProps = {
  type: "info"
};

export default Alert;
