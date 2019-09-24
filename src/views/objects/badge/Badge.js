// @flow

import * as React from "react";
import cx from "classnames";
import "./___.scss";

/**
 * Badge
 *
 * @param {string} content                      - Badge content
 * @param {string} [metadata.contextClass]      - Badge context class
 * @param {array}  [metadata.additionalClasses] - Badge additional classes
 */

const ___ = (props: Props) => {
  const { prop1, prop2 } = props;

  const ___Class = cx(
    "o-badge",
    props.metadata.contextClass,
    props.metadata.additionalClasses,
    {
      prop1: "___--prop1"
    }
  );

  return <span className="___Class">{props.content}</span>;
};

___.defaultProps = {
  prop1: 2
};

export default ___;
