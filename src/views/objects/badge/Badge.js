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
  const {
    prop1,
    prop2
  } = props;

  const ___Class = cx(
    "___",
    {
      prop1: "___--prop1"
    }
  );

  return (
	{% set contextClass = props.metadata.contextClass %}
	{% set additionalClasses = props.metadata.additionalClasses %}

	<span className="{ contextClass } o-badge { additionalClasses|additionalClasses }">{ props.content }</span>
  );
};

___.defaultProps = {
  prop1: 2
};

export default ___;
