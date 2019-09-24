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

{% macro default(options) %}
	{% set contextClass = options.metadata.contextClass %}
	{% set modifierClasses = options.metadata.modifierClasses %}
	{% set additionalClasses = options.metadata.additionalClasses %}

	<div className="{ contextClass } { 'o-loader'|modifierClasses(modifierClasses) } { additionalClasses|additionalClasses }"></div>
{% endmacro %}
