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

{% macro default(options) %}
	{% set contextClass = options.metadata.contextClass %}
	{% set additionalClasses = options.metadata.additionalClasses %}

	{% if options.type == 'info' %}
		{% set icon = 'info' %}
	{% elseif options.type == 'success' %}
		{% set icon = 'check_circle' %}
	{% elseif options.type == 'warning' %}
		{% set icon = 'warning' %}
	{% elseif options.type == 'danger' %}
		{% set icon = 'error' %}
	{% endif %}

	<div className="{ contextClass } o-alert o-alert--{ options.type|default('info') } { not options.hidden ? 'is--visible'} { options.closable ? 'js-alert'} wow { additionalClasses|additionalClasses }">
		<i className="{ 'o-alert__icon'|contextClass(contextClass) } material-icons">{ icon|default('info') }</i>
		<div className="{ 'o-alert__content'|contextClass(contextClass) }">{ options.content|raw }</div>
		{% if options.closable %}
			<button className="{ 'o-alert__close'|contextClass(contextClass) } js-alert-close">&#x2716;</button>
		{% endif %}
	</div>
{% endmacro %}
