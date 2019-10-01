// @flow

import * as React from "react";
import cx from "classnames";
import "./badge.scss";

/**
 * @param {string} content                      - Badge content
 * @param {string} [metadata.contextClass]      - Badge context class
 * @param {array}  [metadata.additionalClasses] - Badge additional classes
 */

const Badge = (props: Props) => {
  const { prop1, prop2 } = props;

  const BadgeClass = cx(
    "o-badge",
    props.metadata.contextClass,
    props.metadata.additionalClasses,
    {
      "Badge--prop1": prop1
    }
  );

  return <span className={BadgeClass}>{props.content}</span>;
};

Badge.defaultProps = {
  prop1: 2
};

export default Badge;
