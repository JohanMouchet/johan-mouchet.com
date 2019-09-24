// @flow

import * as React from "react";
import cx from "classnames";
import "./___.scss";

/**
 * Notice
 *
 * @param {string}  primary                      - Notice primary content
 * @param {string}  [secondary]                  - Notice secondary content
 * @param {boolean} closeButton                  - Notice close button
 * @param {string}  [metadata.contextClass]       - Notice context class
 * @param {array}   [metadata.additionalClasses] - Notice additional classes
 */

{% macro default(options) %}
	{% set contextClass = options.metadata.contextClass %}
	{% set additionalClasses = options.metadata.additionalClasses %}

	<div className="{ contextClass } o-notice js-notice { additionalClasses|additionalClasses }">
		<div className="container container--lg">
			<div className="grid grid--yCenter-@xs">
				<div className="cell cell--@xs">
					<div className="{ ''|contextClass(contextClass) }o-notice__primary">
						{ options.primary|raw }
					</div>
				</div>
				{% if options.secondary %}
					<div className="cell cell--0-@xs">
						<div className="{ 'o-notice__secondary'|contextClass(contextClass) }">
							{ options.secondary|raw }
						</div>
					</div>
				{% endif %}
				{% if options.closeButton %}
					<div className="cell cell--0-@xs">
						<button className="{ 'o-notice__close'|contextClass(contextClass) } js-notice-close">&#x2716;</button>
					</div>
				{% endif %}
			</div>
		</div>
	</div>
{% endmacro %}
