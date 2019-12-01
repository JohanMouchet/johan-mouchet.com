// @flow

import * as React from "react";
import { useState } from "react";
import cx from "classnames";
import "./Form.scss";

type LabelProps = {
  id?: string,
  block: boolean,
  metadata?: {
    contextClass?: string,
    additionalClasses?: Array<string>
  },
  children?: Node
};

const Label = (props: LabelProps) => {
  const { id, block, metadata = {}, children } = props;

  const LabelClass = cx(
    "o-form__label",
    { "o-form__label--block": block || !children },
    metadata.contextClass,
    metadata.additionalClasses
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
  metadata?: {
    contextClass?: string,
    additionalClasses?: Array<string>,
    attributes?: { [key: string]: any }
  }
};

const Field = (props: FieldProps) => {
  const { id, type, name, value, variant, metadata = {} } = props;

  const FieldClass = cx(
    "o-form__field",
    `o-form__field--${type}`,
    { [`o-form__field--${variant}`]: variant },
    metadata.contextClass,
    metadata.additionalClasses
  );

  return (
    <input
      id={id}
      type={type}
      name={name}
      defaultValue={value}
      className={FieldClass}
      {...metadata.attributes}
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
  metadata?: {
    contextClass?: string,
    additionalClasses?: Array<string>,
    attributes?: { [key: string]: any }
  },
  children?: Node
};

// TODO fix checked state

const Toggle = (props: ToggleProps) => {
  const { id, type, name, value, checked, metadata = {}, children } = props;
  const [check] = useState(checked);

  const handleChange = check => (check = !check);

  const ToggleClass = cx(
    "o-form__toggle",
    `o-form__toggle--${type}`,
    metadata.contextClass,
    metadata.additionalClasses
  );

  return (
    <label className={ToggleClass} {...metadata.attributes}>
      <input
        id={id}
        type={type}
        name={name}
        defaultValue={value}
        className="o-form__toggle-input"
        defaultChecked={checked}
        {...metadata.attributes}
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
  metadata?: {
    contextClass?: string,
    additionalClasses?: Array<string>,
    attributes?: { [key: string]: any }
  },
  children?: Node
};

const File = (props: FileProps) => {
  const { id, name, multipleCaption, metadata = {}, children } = props;

  const FileClass = cx(
    "o-form__file",
    "o-button",
    "js-form-file",
    metadata.contextClass,
    metadata.additionalClasses
  );

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
        {...metadata.attributes}
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
  metadata?: {
    contextClass?: string,
    additionalClasses?: Array<string>,
    attributes?: { [key: string]: any }
  }
};

const Select = (props: SelectProps) => {
  const { id, name, options, metadata = {} } = props;

  const SelectClass = cx(
    "o-form__field",
    "o-form__field--select",
    metadata.contextClass,
    metadata.modifierClasses,
    metadata.additionalClasses
  );

  return !options ? null : (
    <select
      id={id}
      name={name}
      className={SelectClass}
      {...metadata.attributes}
    >
      {options.map(option => (
        <option
          defaultValue={option.value}
          {...metadata.attributes}
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
  metadata?: {
    contextClass?: string,
    additionalClasses?: Array<string>,
    attributes?: { [key: string]: any }
  },
  children?: Node
};

const Textarea = (props: TextareaProps) => {
  const { id, name, metadata = {}, children } = props;

  const TextareaClass = cx(
    "o-form__field",
    "o-form__field--textarea",
    metadata.contextClass,
    metadata.additionalClasses
  );

  return (
    <textarea
      id={id}
      name={name}
      className={TextareaClass}
      {...metadata.attributes}
    >
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
  metadata?: {
    contextClass?: string,
    additionalClasses?: Array<string>,
    attributes?: { [key: string]: any }
  }
};

const Range = (props: RangeProps) => {
  const { id, name, metadata = {} } = props;

  const RangeClass = cx(
    "o-form__range",
    metadata.contextClass,
    metadata.additionalClasses
  );

  return (
    <input
      id={id}
      type="range"
      name={name}
      className={RangeClass}
      {...metadata.attributes}
    />
  );
};

Range.defaultProps = {
  prop1: 2
};

export { Range };
