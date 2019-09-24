// @flow

import * as React from "react";
import cx from "classnames";
import "./___.scss";

/**
 * Loader
 *
 * @param {string} [metadata.contextClass]      - Loader context class
 * @param {array}  [metadata.modifierClasses]   - Loader modifiers classes
 * @param {array}  [metadata.additionalClasses] - Loader additional classes
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
	{% set modifierClasses = props.metadata.modifierClasses %}
	{% set additionalClasses = props.metadata.additionalClasses %}

	<div className="{ contextClass } { 'o-loader'|modifierClasses(modifierClasses) } { additionalClasses|additionalClasses }"></div>
  );
};

___.defaultProps = {
  prop1: 2
};

export default ___;
