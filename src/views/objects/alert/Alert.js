// @flow

import * as React from "react";
import cx from "classnames";
import "./___.scss";

/**
 * Alert
 *
 * @param {string}  [type = info]                - Alert type
 * @param {string}  content                      - Alert content
 * @param {boolean} [hidden = false]             - Alert visibility
 * @param {boolean} [closable]                   - Alert closable capacity
 * @param {string}  [metadata.contextClass]      - Alert context class
 * @param {array}   [metadata.additionalClasses] - Alert additional classes
 */

const ___ = (props: Props) => {
  const { prop1, prop2 } = props;

  const ___Class = cx(
    "o-alert",
    props.metadata.contextClass,
    props.metadata.additionalClasses,
    {
      prop1: "___--prop1"
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
      className={`${___Class} o-alert--${props.type} ${!props.hidden &&
        "is--visible"} ${props.closable && "js-alert"} wow`}
    >
      <i
        className={`${"o-alert__icon" |
          contextClass(contextClass)} material-icons`}
      >
        {getIcon(props.type)}
      </i>
      <div className={"o-alert__content" | contextClass(contextClass)}>
        {props.content | raw}
      </div>
      {props.closable && (
        <button
          className={`${"o-alert__close" |
            contextClass(contextClass)} js-alert-close`}
        >
          &#x2716;
        </button>
      )}
    </div>
  );
};

___.defaultProps = {
  type: "info"
};

export default ___;
