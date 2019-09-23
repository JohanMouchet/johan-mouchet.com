/**
 * Progress bar
 *
 * @param {string} [label]                      - Progress bar label
 * @param {string} [total]                      - Progress bar total
 * @param {int}    filling                      - Progress bar filling percent
 * @param {string} [tooltip]                    - Progress bar tooltip
 * @param {string} [metadata.contextClass]      - Progress bar context class
 * @param {array}  [metadata.additionalClasses] - Progress bar additional classes
 * @param {array}  [metadata.modifierClasses]   - Progress bar modifiers classes
 * @param {object} [metadata.attributes]        - Progress bar attributes
 */

{% macro default(options) %}
	{% set contextClass = options.metadata.contextClass %}
	{% set modifierClasses = options.metadata.modifierClasses %}
	{% set additionalClasses = options.metadata.additionalClasses %}

	<div className="{ contextClass } { 'o-progress-bar'|modifierClasses(modifierClasses) } { additionalClasses|additionalClasses }">
		{% if options.label %}
			<span className="{ 'o-progress-bar__label'|contextClass(contextClass) }">{ options.label|raw }</span>
		{% endif %}
		{% if options.total %}
			<span className="{ 'o-progress-bar__total'|contextClass(contextClass) }">{ options.total|raw }</span>
		{% endif %}
		<div className="{ 'o-progress-bar__container'|contextClass(contextClass) }">
			<div className="{ 'o-progress-bar__filling'|contextClass(contextClass) } wow" style="width: { options.filling }%" {% if options.tooltip %}data-progress-bar-tooltip="{ options.tooltip|raw }"{% endif %}></div>
		</div>
	</div>
{% endmacro %}
