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

{% macro default(options) %}
	{% set contextClass = options.metadata.contextClass %}
	{% set additionalClasses = options.metadata.additionalClasses %}

	<span className="{ contextClass } o-badge { additionalClasses|additionalClasses }">{ options.content }</span>
{% endmacro %}
