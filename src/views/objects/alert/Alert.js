// @flow

import * as React from "react";
import cx from "classnames";
import "./alert.scss";

type Props = {
  [type = info]: string,
  content: string,
  [hidden: boolean,
  [closable]: boolean,
  [metadata.contextClass]: string,
  [metadata.additionalClasses]: array,
};

const Alert = (props: Props) => {
  const { prop1, prop2 } = props;

  const AlertClass = cx(
    "o-alert",
    props.metadata.contextClass,
    props.metadata.additionalClasses,
    {
      "Alert--prop1": prop1
    }
  );

  const getIcon = type => {
    switch (type) {
      case "info":
        "info";
        break;
      case "success":
        "check_circle";
        break;
      case "warning":
        "warning";
        break;
      case "danger":
        "error";
        break;
      default:
        "info";
    }
  };

  return (
    <div
      className={`${AlertClass} o-alert--${props.type} ${!props.hidden &&
        "is--visible"} ${props.closable && "js-alert"} wow`}
    >
      <i
        className="o-alert__icon material-icons"
      >
        {getIcon(props.type)}
      </i>
      <div className="o-alert__content">
        {props.content | raw}
      </div>
      {props.closable && (
        <button
          className="o-alert__close js-alert-close"
        >
          &#x2716;
        </button>
      )}
    </div>
  );
};

Alert.defaultProps = {
  type: "info"
};

export default Alert;
