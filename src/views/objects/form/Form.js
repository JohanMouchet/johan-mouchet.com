// @flow

import * as React from "react";
import { useState } from "react";
import cx from "classnames";
import "./Form.scss";

type LabelProps = {
  id?: string,
  block: boolean,
  extraClasses?: string | Array | Object,
  children?: Node
};

const Label = (props: LabelProps) => {
  const { id, block, extraClasses, children } = props;

  const LabelClass = cx(
    "o-form__label",
    { "o-form__label--block": block || !children },
    extraClasses
  );

  return (
    <label htmlFor={id} className={LabelClass}>
      {children || "&nbsp;"}
    </label>
  );
};

Label.defaultProps = {
  prop1: 2
};

export { Label };

type FieldProps = {
  id?: string,
  type: string,
  name: string,
  value?: string,
  variant?: "no-corner-left" | "no-corner-right",
  extraClasses?: string | Array | Object,
  attributes?: { [key: string]: any }
};

const Field = (props: FieldProps) => {
  const { id, type, name, value, variant, extraClasses, attributes } = props;

  const FieldClass = cx(
    "o-form__field",
    `o-form__field--${type}`,
    { [`o-form__field--${variant}`]: variant },
    extraClasses
  );

  return (
    <input
      id={id}
      type={type}
      name={name}
      defaultValue={value}
      className={FieldClass}
      {...attributes}
    />
  );
};

Field.defaultProps = {
  prop1: 2
};

export { Field };

type ToggleProps = {
  id?: string,
  type: string,
  name?: string,
  value?: string,
  checked?: boolean,
  extraClasses?: string | Array | Object,
  attributes?: { [key: string]: any },
  children?: Node
};

// TODO fix checked state

const Toggle = (props: ToggleProps) => {
  const {
    id,
    type,
    name,
    value,
    checked,
    extraClasses,
    attributes,
    children
  } = props;
  const [check] = useState(checked);

  const handleChange = check => (check = !check);

  const ToggleClass = cx(
    "o-form__toggle",
    `o-form__toggle--${type}`,
    extraClasses
  );

  return (
    <label className={ToggleClass} {...attributes}>
      <input
        id={id}
        type={type}
        name={name}
        defaultValue={value}
        className="o-form__toggle-input"
        defaultChecked={checked}
        {...attributes}
        onChange={() => handleChange(check)}
      />
      <span className="o-form__toggle-icon"></span>
      {children && <span className="o-form__toggle-text">{children}</span>}
    </label>
  );
};

Toggle.defaultProps = {
  prop1: 2
};

export { Toggle };

type FileProps = {
  id?: string,
  name: string,
  multipleCaption?: string,
  extraClasses?: string | Array | Object,
  attributes?: { [key: string]: any },
  children?: Node
};

const File = (props: FileProps) => {
  const { id, name, multipleCaption, extraClasses, attributes, children } = props;

  const FileClass = cx("o-form__file", "o-button", "js-form-file", extraClasses);

  return (
    <label className={FileClass}>
      <input
        id={id}
        type="file"
        name={name}
        className="o-form__file-input js-form-file-input"
        data-multiple-caption={
          multipleCaption ? multipleCaption : "{count} files selected"
        }
        {...attributes}
      />
      <i className="material-icons">file_upload</i>
      {children && (
        <span className="o-form__file-text js-form-file-text">{children}</span>
      )}
    </label>
  );
};

File.defaultProps = {
  prop1: 2
};

export { File };

type SelectProps = {
  id?: string,
  name: string,
  options: [
    {
      text: string,
      value: string,
      attributes: Array<string>
    }
  ],
  extraClasses?: string | Array | Object,
  attributes?: { [key: string]: any }
};

const Select = (props: SelectProps) => {
  const { id, name, options, extraClasses, attributes } = props;

  const SelectClass = cx("o-form__field", "o-form__field--select", extraClasses);

  return !options ? null : (
    <select id={id} name={name} className={SelectClass} {...attributes}>
      {options.map(option => (
        <option
          defaultValue={option.value}
          {...option.attributes}
          key={option.value}
        >
          {option.text}
        </option>
      ))}
    </select>
  );
};

Select.defaultProps = {
  prop1: 2
};

export { Select };

type TextareaProps = {
  id?: string,
  name: string,
  extraClasses?: string | Array | Object,
  attributes?: { [key: string]: any },
  children?: Node
};

const Textarea = (props: TextareaProps) => {
  const { id, name, extraClasses, attributes, children } = props;

  const TextareaClass = cx(
    "o-form__field",
    "o-form__field--textarea",
    extraClasses
  );

  return (
    <textarea id={id} name={name} className={TextareaClass} {...attributes}>
      {children}
    </textarea>
  );
};

Textarea.defaultProps = {
  prop1: 2
};

export { Textarea };

type RangeProps = {
  id?: string,
  name: string,
  extraClasses?: string | Array | Object,
  attributes?: { [key: string]: any }
};

const Range = (props: RangeProps) => {
  const { id, name, extraClasses, attributes } = props;

  const RangeClass = cx("o-form__range", extraClasses);

  return (
    <input
      id={id}
      type="range"
      name={name}
      className={RangeClass}
      {...attributes}
    />
  );
};

Range.defaultProps = {
  prop1: 2
};

export { Range };
