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

const label = (props: Props) => {
	const {
	  prop1,
	  prop2
	} = props;
  
	const ___Class = cx(
	  "o-form__label",
	  props.metadata.contextClass,
	  props.metadata.modifierClasses,
	  props.metadata.additionalClasses,
	  {
		prop1: "___--prop1"
	  }
	);
  
	return (
	{%- set text = props.text is empty ? '&nbsp;' : props.text -%}
	{%- set blockLabelClass = props.text is empty ? 'o-form__label--block' -%}

	<label {% if props.for %}for={props.for}{% endif %} className={`${___Class}${blockLabelClass}`}>
		{- text|raw -}
	</label>
  );
};

___.defaultProps = {
  prop1: 2
};

export { ___ };

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

const field = (props: Props) => {
	const {
	  prop1,
	  prop2
	} = props;
  
	const ___Class = cx(
	  "o-form__field",
	  props.metadata.contextClass,
	  props.metadata.modifierClasses,
	  props.metadata.additionalClasses,
	  {
		prop1: "___--prop1"
	  }
	);
  
	return (


	<input {% if props.id %}id={props.id}{% endif %} type={props.type} name={props.name} {% if props.value %}value={props.value}{% endif %} className={`${___Class} o-form__field--${ props.type}`} {[...props.metadata.attributes]}>
  );
};

___.defaultProps = {
  prop1: 2
};

export { ___ };

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

const toggle = (props: Props) => {
	const {
	  prop1,
	  prop2
	} = props;
  
	const ___Class = cx(
	  "o-form__toggle",
	  props.metadata.contextClass,
	  props.metadata.additionalClasses,
	  {
		prop1: "___--prop1"
	  }
	);
  
	return (


	<label className={`${___Class} o-form__toggle--${props.type}`} {[...props.metadata.attributes]}>
		<input {% if props.id %}id={props.id}{% endif %} type={props.type} {% if props.name %}name={props.name}{% endif %} {% if props.value %}value={props.value}{% endif %} className={'o-form__toggle-input'|contextClass(contextClass)} {[...props.metadata.attributes]}>
		<span className={'o-form__toggle-icon'|contextClass(contextClass)}></span>
		{%- if props.text -%}
			<span className={'o-form__toggle-text'|contextClass(contextClass)}>{ props.text|raw }</span>
		{% endif -%}
	</label>
  );
};

___.defaultProps = {
  prop1: 2
};

export { ___ };

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

const file = (props: Props) => {
	const {
	  prop1,
	  prop2
	} = props;
  
	const ___Class = cx(
	  "o-form__file",
	  props.metadata.contextClass,
	  props.metadata.additionalClasses,
	  {
		prop1: "___--prop1"
	  }
	);
  
	return (


	<label className="___Class o-button js-form-file">
		<input {% if props.id %}id={props.id}{% endif %} type="file" name={props.name} className={`${'o-form__file-input'|contextClass(contextClass) } js-form-file-input"`} data-multiple-caption={props.multipleCaption ? props.multipleCaption : '{count} files selected'} {[...props.metadata.attributes]}>
		<i className="material-icons">file_upload</i>
		{% if props.text %}
			<span className={`${'o-form__file-text'|contextClass(contextClass) } js-form-file-text`}>{ props.text|raw }</span>
		{% endif %}
	</label>
  );
};

___.defaultProps = {
  prop1: 2
};

export { ___ };

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

const select = (props: Props) => {
	const {
	  prop1,
	  prop2
	} = props;
  
	const ___Class = cx(
	  "o-form__field",
	  props.metadata.contextClass,
	  props.metadata.modifierClasses,
	  props.metadata.additionalClasses,
	  {
		prop1: "___--prop1"
	  }
	);
  
	return (


	<select {% if props.id %}id={props.id}{% endif %} name={props.name} className="___Class o-form__field--select" {[...props.metadata.attributes]}>
		{% for option in props.options %}
			<option {% if props.value %}value={props.value}{% endif %} {[...props.metadata.attributes]}>{ option.text }</option>
		{% endfor %}
	</select>
  );
};

___.defaultProps = {
  prop1: 2
};

export { ___ };

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

const textarea = (props: Props) => {
	const {
	  prop1,
	  prop2
	} = props;
  
	const ___Class = cx(
	  "o-form__field",
	  props.metadata.contextClass,
	  props.metadata.additionalClasses,
	  {
		prop1: "___--prop1"
	  }
	);
  
	return (


	<textarea {% if props.id %}id={props.id}{% endif %} name={props.name} className="___Class o-form__field--textarea" {[...props.metadata.attributes]}>
		{- props.text|raw -}
	</textarea>
  );
};

___.defaultProps = {
  prop1: 2
};

export { ___ };

/**
 * Range
 *
 * @param {string} [id]                         - Field id
 * @param {string} name                         - Field name
 * @param {string} [metadata.contextClass]      - Field context class
 * @param {array}  [metadata.additionalClasses] - Field additional classes
 * @param {object} [metadata.attributes]        - Field attributes
 */

const range = (props: Props) => {
	const {
	  prop1,
	  prop2
	} = props;
  
	const ___Class = cx(
	  "o-form__range",
	  props.metadata.contextClass,
	  props.metadata.additionalClasses,
	  {
		prop1: "___--prop1"
	  }
	);
  
	return (


	<input {% if props.id %}id={props.id}{% endif %} type="range" name={props.name} className="___Class" {[...props.metadata.attributes]}>
  );
};

___.defaultProps = {
  prop1: 2
};

export { ___ };
