// @flow

import * as React from "react";
import cx from "classnames";
import "./___.scss";

/**
 * Accordion
 *
 * @param {string} items.thumb                  - Accordion thumb title
 * @param {string} items.panel                  - Accordion panel content
 * @param {string} [metadata.contextClass]      - Accordion context class
 * @param {array}  [metadata.additionalClasses] - Accordion additional classes
 */

{% macro default(options) %}
	{% set contextClass = options.metadata.contextClass %}
	{% set additionalClasses = options.metadata.additionalClasses %}

	<ul className="{ contextClass } o-accordion js-accordion { additionalClasses|additionalClasses }">
		{% for item in options.items %}
			<li className="{ 'o-accordion__item'|contextClass(contextClass) } js-accordion-item { loop.first ? 'is--active' }">
				<button className="{ 'o-accordion__thumb'|contextClass(contextClass) }">
					<i className="{ 'o-accordion__thumb-icon'|contextClass(contextClass) } material-icons { loop.index > 1 ? 'wow fadeInLeft' }" {% if loop.index > 1 %}data-wow-delay="{ loop.index0 * 0.15 }s"{% endif %}>chevron_right</i>
					{ item.thumb }
				</button>
				<p className="{ 'o-accordion__panel'|contextClass(contextClass) } js-accordion-panel">
					{ item.panel }
				</p>
			</li>
		{% endfor %}
	</ul>
{% endmacro %}
