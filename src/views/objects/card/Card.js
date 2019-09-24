// @flow

import * as React from "react";
import cx from "classnames";
import "./___.scss";

/**
 * Card
 *
 * @param {string} [banner]                     - Card banner
 * @param {string} [bannerUrl]                  - Card banner URL
 * @param {string} [header]                     - Card header
 * @param {string} [body]                       - Card body
 * @param {string} [footer]                     - Card footer
 * @param {string} [metadata.contextClass]      - Card context class
 * @param {array}  [metadata.modifierClasses]   - Card modifiers classes
 * @param {array}  [metadata.additionalClasses] - Card additional classes
 */

{% macro default(options) %}
	{% set contextClass = options.metadata.contextClass %}
	{% set modifierClasses = options.metadata.modifierClasses %}
	{% set additionalClasses = options.metadata.additionalClasses %}

	<section className="{ contextClass } { 'o-card'|modifierClasses(modifierClasses) } { additionalClasses|additionalClasses }">
		{% if options.banner or options.banner is same as(true) or options.bannerUrl %}
			{% set tag = not options.header ? 'header' : 'div' %}

			<{ tag } className="{ 'o-card__banner'|contextClass(contextClass) }" {% if options.bannerUrl %}style="background-image: url('{ options.bannerUrl }')"{% endif %}>
				{ options.banner is same as(true) ? '' : options.banner|raw }
			</{ tag }>
		{% endif %}
		{% if options.header %}
			<header className="{ 'o-card__header'|contextClass(contextClass) }">
				{ options.header|raw }
			</header>
		{% endif %}
		{% if options.body %}
			<div className="{ 'o-card__body'|contextClass(contextClass) }">
				{ options.body|raw }
			</div>
		{% endif %}
		{% if options.footer %}
			<footer className="{ 'o-card__footer'|contextClass(contextClass) }">
				{ options.footer|raw }
			</footer>
		{% endif %}
	</section>
{% endmacro %}
