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

{% macro default(options) %}
	{% set contextClass = options.metadata.contextClass %}
	{% set modifierClasses = options.metadata.modifierClasses %}
	{% set additionalClasses = options.metadata.additionalClasses %}

	<blockquote className="{ contextClass } o-blockquote { 'o-blockquote'|modifierClasses(modifierClasses) } wow { additionalClasses|additionalClasses }">
		<div className="{ 'o-blockquote__quotes'|contextClass(contextClass) }">
			{ options.quote|raw }
		</div>

		{ options.outerQuote|raw }

		{% if options.cite %}
			<cite className="{ 'o-blockquote__cite'|contextClass(contextClass) }">
					{ options.cite|raw }
			</cite>
		{% endif %}
	</blockquote>
{% endmacro %}
