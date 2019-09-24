// @flow

import * as React from "react";
import cx from "classnames";
import "./___.scss";

/**
 * Blockquote
 *
 * @param {string} quote                        - Blockquote quote
 * @param {string} [outerQuote]                 - Blockquote outer quote
 * @param {string} [cite]                       - Blockquote cite
 * @param {string} [metadata.contextClass]      - Blockquote context class
 * @param {array}  [metadata.modifierClasses]   - Blockquote modifiers classes
 * @param {array}  [metadata.additionalClasses] - Blockquote additional classes
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

	<blockquote className="{ contextClass } o-blockquote { 'o-blockquote'|modifierClasses(modifierClasses) } wow { additionalClasses|additionalClasses }">
		<div className="{ 'o-blockquote__quotes'|contextClass(contextClass) }">
			{ props.quote|raw }
		</div>

		{ props.outerQuote|raw }

		{% if props.cite %}
			<cite className="{ 'o-blockquote__cite'|contextClass(contextClass) }">
					{ props.cite|raw }
			</cite>
		{% endif %}
	</blockquote>
  );
};

___.defaultProps = {
  prop1: 2
};

export default ___;
