// @flow

import * as React from "react";
import cx from "classnames";
import "./___.scss";

/**
 * Label
 *
 * @param {string} [for]                        - Label for
 * @param {string} [text]                       - Label text
 * @param {string} [metadata.contextClass]      - Label context class
 * @param {array}  [metadata.additionalClasses] - Label additional classes
 * @param {array}  [metadata.modifierClasses]   - Label modifiers classes
 */

{% macro label(options) %}
	{% set contextClass = options.metadata.contextClass %}
	{% set modifierClasses = options.metadata.modifierClasses %}
	{% set additionalClasses = options.metadata.additionalClasses %}

	{%- set text = options.text is empty ? '&nbsp;' : options.text -%}
	{%- set blockLabelClass = options.text is empty ? 'o-form__label--block' -%}

	<label {% if options.for %}for="{ options.for }"{% endif %} className="{ contextClass } o-form__label { 'o-form__label'|modifierClasses(modifierClasses) } { blockLabelClass } { additionalClasses|additionalClasses }">
		{- text|raw -}
	</label>
{% endmacro %}

/**
 * Field
 *
 * @param {string} [id]                         - Field id
 * @param {string} type                         - Field type
 * @param {string} name                         - Field name
 * @param {string} [value]                      - Field value
 * @param {string} [metadata.contextClass]      - Field context class
 * @param {array}  [metadata.additionalClasses] - Field additional classes
 * @param {array}  [metadata.modifierClasses]   - Field modifiers classes
 * @param {object} [metadata.attributes]        - Field attributes
 */

{% macro field(options) %}
	{% set contextClass = options.metadata.contextClass %}
	{% set modifierClasses = options.metadata.modifierClasses %}
	{% set additionalClasses = options.metadata.additionalClasses %}
	{% set attributes = options.metadata.attributes %}

	<input {% if options.id %}id="{ options.id }"{% endif %} type="{ options.type }" name="{ options.name }" {% if options.value %}value="{ options.value }"{% endif %} className="{ contextClass } o-form__field { 'o-form__field'|modifierClasses(modifierClasses) } o-form__field--{ options.type } { additionalClasses|additionalClasses }" { attributes|attributes|raw }>
{% endmacro %}

/**
 * Toggle
 *
 * @param {string} [id]                         - Toggle id
 * @param {string} type                         - Toggle type (checkbox|radio)
 * @param {string} [name]                       - Toggle name
 * @param {string} [value]                      - Toggle value
 * @param {string} [text]                       - Toggle text
 * @param {string} [metadata.contextClass]      - Toggle context class
 * @param {array}  [metadata.additionalClasses] - Toggle additional classes
 * @param {object} [metadata.attributes]        - Toggles attributes
 */

{% macro toggle(options) %}
	{% set contextClass = options.metadata.contextClass %}
	{% set additionalClasses = options.metadata.additionalClasses %}
	{% set attributes = options.metadata.attributes %}

	<label className="{ contextClass } o-form__toggle o-form__toggle--{ options.type } { additionalClasses|additionalClasses }">
		<input {% if options.id %}id="{ options.id }"{% endif %} type="{ options.type }" {% if options.name %}name="{ options.name }"{% endif %} {% if options.value %}value="{ options.value }"{% endif %} className="{ 'o-form__toggle-input'|contextClass(contextClass) }" { attributes|attributes|raw }>
		<span className="{ 'o-form__toggle-icon'|contextClass(contextClass) }"></span>
		{%- if options.text -%}
			<span className="{ 'o-form__toggle-text'|contextClass(contextClass) }">{ options.text|raw }</span>
		{% endif -%}
	</label>
{% endmacro %}

/**
 * File
 *
 * @param {string} [id]                         - File id
 * @param {string} name                         - File name
 * @param {string} [text]                       - File text
 * @param {string} [metadata.contextClass]      - File context class
 * @param {array}  [metadata.additionalClasses] - File additional classes
 * @param {object} [metadata.attributes]        - File attributes
 * @param {string} [metadata.multipleCaption]   - File caption used when multiple files selected (default: "{count} files selected")
 */

{% macro file(options) %}
	{% set contextClass = options.metadata.contextClass %}
	{% set additionalClasses = options.metadata.additionalClasses %}
	{% set attributes = options.metadata.attributes %}

	<label className="{ contextClass } o-form__file o-button js-form-file { additionalClasses|additionalClasses }">
		<input {% if options.id %}id="{ options.id }"{% endif %} type="file" name="{ options.name }" className="{ 'o-form__file-input'|contextClass(contextClass) } js-form-file-input" data-multiple-caption="{ options.multipleCaption ? options.multipleCaption : '{count} files selected' }"  { attributes|attributes|raw }>
		<i className="material-icons">file_upload</i>
		{% if options.text %}
			<span className="{ 'o-form__file-text'|contextClass(contextClass) } js-form-file-text">{ options.text|raw }</span>
		{% endif %}
	</label>
{% endmacro %}

/**
 * Select
 *
 * @param {string} [id]                         - Select id
 * @param {string} name                         - Select name
 * @param {string} [metadata.contextClass]      - Select context class
 * @param {array}  [metadata.additionalClasses] - Select additional classes
 * @param {object} [metadata.attributes]        - Select attributes
 * @param {array}  options                      - Select list of option
 * @param {string} options[0].text              - Select option text
 * @param {string} options[0].value             - Select option value
 * @param {array}  options[0].attributes        - Select option attributes
 */

{% macro select(options) %}
	{% set contextClass = options.metadata.contextClass %}
	{% set additionalClasses = options.metadata.additionalClasses %}
	{% set attributes = options.metadata.attributes %}

	<select {% if options.id %}id="{ options.id }"{% endif %} name="{ options.name }" className="{ contextClass } o-form__field o-form__field--select { additionalClasses|additionalClasses }" { attributes|attributes|raw }>
		{% for option in options.options %}
			<option {% if options.value %}value="{ options.value }"{% endif %} { option.attributes|attributes|raw }>{ option.text }</option>
		{% endfor %}
	</select>
{% endmacro %}

/**
 * Textarea
 *
 * @param {string} [id]                         - Field id
 * @param {string} name                         - Field name
 * @param {string} [text]                       - Field text
 * @param {string} [metadata.contextClass]      - Field context class
 * @param {array}  [metadata.additionalClasses] - Field additional classes
 * @param {object} [metadata.attributes]        - Field attributes
 */

{% macro textarea(options) %}
	{% set contextClass = options.metadata.contextClass %}
	{% set additionalClasses = options.metadata.additionalClasses %}
	{% set attributes = options.metadata.attributes %}

	<textarea {% if options.id %}id="{ options.id }"{% endif %} name="{ options.name }" className="{ contextClass } o-form__field o-form__field--textarea { additionalClasses|additionalClasses }" { attributes|attributes|raw }>
		{- options.text|raw -}
	</textarea>
{% endmacro %}

/**
 * Range
 *
 * @param {string} [id]                         - Field id
 * @param {string} name                         - Field name
 * @param {string} [metadata.contextClass]      - Field context class
 * @param {array}  [metadata.additionalClasses] - Field additional classes
 * @param {object} [metadata.attributes]        - Field attributes
 */

{% macro range(options) %}
	{% set contextClass = options.metadata.contextClass %}
	{% set additionalClasses = options.metadata.additionalClasses %}
	{% set attributes = options.metadata.attributes %}

	<input {% if options.id %}id="{ options.id }"{% endif %} type="range" name="{ options.name }" className="{ contextClass } o-form__range { additionalClasses|additionalClasses }" { attributes|attributes|raw }>
{% endmacro %}
