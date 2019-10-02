// @flow

import * as React from "react";
import cx from "classnames";
import "./form.scss";

type LabelProps = {
  [for]: string,
  [text]: string,
  [metadata.contextClass]: string,
  [metadata.additionalClasses]: array,
  [metadata.modifierClasses]: array,
};

const Label = (props: LabelProps) => {
	const {
	  prop1,
	  prop2
	} = props;
  
	const LabelClass = cx(
	  "o-form__label",
	  props.metadata.contextClass,
	  props.metadata.modifierClasses,
	  props.metadata.additionalClasses,
	  {
		"Label--prop1": prop1
	  }
	);
  
	return (
	{%- set text = props.text is empty ? '&nbsp;' : props.text -%}
	{%- set blockLabelClass = props.text is empty ? 'o-form__label--block' -%}

	<label {% if props.for %}for={props.for}{% endif %} className={`${LabelClass}${blockLabelClass}`}>
		{- text|raw -}
	</label>
  );
};

Label.defaultProps = {
  prop1: 2
};

export { Label };

type FieldProps = {
  [id]: string,
  type: string,
  name: string,
  [value]: string,
  [metadata.contextClass]: string,
  [metadata.additionalClasses]: array,
  [metadata.modifierClasses]: array,
  [metadata.attributes]: object,
};

const Field = (props: FieldProps) => {
	const {
	  prop1,
	  prop2
	} = props;
  
	const FieldClass = cx(
	  "o-form__field",
	  props.metadata.contextClass,
	  props.metadata.modifierClasses,
	  props.metadata.additionalClasses,
	  {
		"Field--prop1": prop1
	  }
	);
  
	return (


	<input {% if props.id %}id={props.id}{% endif %} type={props.type} name={props.name} {% if props.value %}value={props.value}{% endif %} className={`${FieldClass} o-form__field--${ props.type}`} {...props.metadata.attributes}>
  );
};

Field.defaultProps = {
  prop1: 2
};

export { Field };

type ToggleProps = {
  [id]: string,
  type: string,
  [name]: string,
  [value]: string,
  [text]: string,
  [metadata.contextClass]: string,
  [metadata.additionalClasses]: array,
  [metadata.attributes]: object,
};

const Toggle = (props: ToggleProps) => {
	const {
	  prop1,
	  prop2
	} = props;
  
	const ToggleClass = cx(
	  "o-form__toggle",
	  props.metadata.contextClass,
	  props.metadata.additionalClasses,
	  {
		"Toggle--prop1": prop1
	  }
	);
  
	return (


	<label className={`${ToggleClass} o-form__toggle--${props.type}`} {...props.metadata.attributes}>
		<input {% if props.id %}id={props.id}{% endif %} type={props.type} {% if props.name %}name={props.name}{% endif %} {% if props.value %}value={props.value}{% endif %} className='o-form__toggle-input' {...props.metadata.attributes}>
		<span className='o-form__toggle-icon'></span>
		{%- if props.text -%}
			<span className='o-form__toggle-text'>{ props.text|raw }</span>
		{% endif -%}
	</label>
  );
};

Toggle.defaultProps = {
  prop1: 2
};

export { Toggle };

type FileProps = {
  [id]: string,
  name: string,
  [text]: string,
  [metadata.contextClass]: string,
  [metadata.additionalClasses]: array,
  [metadata.attributes]: object,
  [metadata.multipleCaption]: string,
};

const File = (props: FileProps) => {
	const {
	  prop1,
	  prop2
	} = props;
  
	const FileClass = cx(
	  "o-form__file",
	  props.metadata.contextClass,
	  props.metadata.additionalClasses,
	  {
		"File--prop1": prop1
	  }
	);
  
	return (


	<label className={`${FileClass} o-button js-form-file`}>
		<input {% if props.id %}id={props.id}{% endif %} type="file" name={props.name} className="o-form__file-input js-form-file-input" data-multiple-caption={props.multipleCaption ? props.multipleCaption : '{count} files selected'} {...props.metadata.attributes}>
		<i className="material-icons">file_upload</i>
		{% if props.text %}
			<span className="o-form__file-text js-form-file-text">{ props.text|raw }</span>
		{% endif %}
	</label>
  );
};

File.defaultProps = {
  prop1: 2
};

export { File };

type SelectProps = {
  [id]: string,
  name: string,
  [metadata.contextClass]: string,
  [metadata.additionalClasses]: array,
  [metadata.attributes]: object,
  options: array,
  options[0].text: string,
  options[0].value: string,
  options[0].attributes: array,
};

const Select = (props: SelectProps) => {
	const {
	  prop1,
	  prop2
	} = props;
  
	const SelectClass = cx(
	  "o-form__field",
	  props.metadata.contextClass,
	  props.metadata.modifierClasses,
	  props.metadata.additionalClasses,
	  {
		"Select--prop1": prop1
	  }
	);
  
	return (


	<select {% if props.id %}id={props.id}{% endif %} name={props.name} className={`${SelectClass} o-form__field--select`} {...props.metadata.attributes}>
		{props.options.map(option => (
			<option {% if props.value %}value={props.value}{% endif %} {...props.metadata.attributes}>{ option.text }</option>
		))}
	</select>
  );
};

Select.defaultProps = {
  prop1: 2
};

export { Select };

type TextareaProps = {
  [id]: string,
  name: string,
  [text]: string,
  [metadata.contextClass]: string,
  [metadata.additionalClasses]: array,
  [metadata.attributes]: object,
};

const Textarea = (props: TextareaProps) => {
	const {
	  prop1,
	  prop2
	} = props;
  
	const TextareaClass = cx(
	  "o-form__field",
	  props.metadata.contextClass,
	  props.metadata.additionalClasses,
	  {
		"Textarea--prop1": prop1
	  }
	);
  
	return (


	<textarea {% if props.id %}id={props.id}{% endif %} name={props.name} className={`${TextareaClass} o-form__field--textarea`} {...props.metadata.attributes}>
		{- props.text|raw -}
	</textarea>
  );
};

Textarea.defaultProps = {
  prop1: 2
};

export { Textarea };

type RangeProps = {
  [id]: string,
  name: string,
  [metadata.contextClass]: string,
  [metadata.additionalClasses]: array,
  [metadata.attributes]: object,
};

const Range = (props: RangeProps) => {
	const {
	  prop1,
	  prop2
	} = props;
  
	const RangeClass = cx(
	  "o-form__range",
	  props.metadata.contextClass,
	  props.metadata.additionalClasses,
	  {
		"Range--prop1": prop1
	  }
	);
  
	return (


	<input id={props.id} type="range" name={props.name} className={RangeClass} {...props.metadata.attributes}>
  );
};

Range.defaultProps = {
  prop1: 2
};

export { Range };
