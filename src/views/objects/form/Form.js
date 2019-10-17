// @flow

import * as React from "react";
import cx from "classnames";
import "./form.scss";

type LabelProps = {
  for?: string,
  metadata?: {
    contextClass?: string,
    additionalClasses?: Array<string>,
    modifierClasses?: Array<string>
  },
  children?: Node
};

const Label = (props: LabelProps) => {
  const { prop1, metadata = {}, children } = props;

  const LabelClass = cx(
    "o-form__label",
    metadata.contextClass,
    metadata.modifierClasses,
    metadata.additionalClasses,
    {
      "Label--prop1": prop1
    }
  );

  return (
    <label
      for={for}
      className={`${LabelClass} ${!children && "o-form__label--block"}`}
    >
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
  metadata?: {
    contextClass?: string,
    additionalClasses?: Array<string>,
    modifierClasses?: Array<string>,
    attributes?: { [key: string]: any }
  }
};

const Field = (props: FieldProps) => {
  const { prop1, metadata = {} } = props;

  const FieldClass = cx(
    "o-form__field",
    metadata.contextClass,
    metadata.modifierClasses,
    metadata.additionalClasses,
    {
      "Field--prop1": prop1
    }
  );

  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      className={`${FieldClass} o-form__field--${type}`}
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
  metadata?: {
    contextClass?: string,
    additionalClasses?: Array<string>,
    attributes?: { [key: string]: any }
  },
  children?: Node
};

const Toggle = (props: ToggleProps) => {
  const { prop1, metadata = {}, children } = props;

  const ToggleClass = cx(
    "o-form__toggle",
    metadata.contextClass,
    metadata.additionalClasses,
    {
      "Toggle--prop1": prop1
    }
  );

  return (
    <label
      className={`${ToggleClass} o-form__toggle--${type}`}
      {...metadata.attributes}
    >
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        className="o-form__toggle-input"
        {...metadata.attributes}
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
  const { prop1, metadata = {}, children } = props;

  const FileClass = cx(
    "o-form__file",
    metadata.contextClass,
    metadata.additionalClasses,
    {
      "File--prop1": prop1
    }
  );

  return (
    <label className={`${FileClass} o-button js-form-file`}>
      <input
        id={id}
        type="file"
        name={name}
        className="o-form__file-input js-form-file-input"
        data-multiple-caption={
          multipleCaption
            ? multipleCaption
            : "{count} files selected"
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
  metadata?: {
    contextClass?: string,
    additionalClasses?: Array<string>,
    attributes?: { [key: string]: any }
  },
  options: {
    text: string,
    value: string,
    attributes: Array<string>
  }
};

const Select = (props: SelectProps) => {
  const { prop1, metadata = {} } = props;

  const SelectClass = cx(
    "o-form__field",
    metadata.contextClass,
    metadata.modifierClasses,
    metadata.additionalClasses,
    {
      "Select--prop1": prop1
    }
  );

  return !options ? null : (
    <select
      id={id}
      name={name}
      className={`${SelectClass} o-form__field--select`}
      {...metadata.attributes}
    >
      {options.map(option => (
        <option value={value} {...metadata.attributes}>
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
  const { prop1, metadata = {}, children } = props;

  const TextareaClass = cx(
    "o-form__field",
    metadata.contextClass,
    metadata.additionalClasses,
    {
      "Textarea--prop1": prop1
    }
  );

  return (
    <textarea
      id={id}
      name={name}
      className={`${TextareaClass} o-form__field--textarea`}
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
  const { prop1, metadata = {} } = props;

  const RangeClass = cx(
    "o-form__range",
    metadata.contextClass,
    metadata.additionalClasses,
    {
      "Range--prop1": prop1
    }
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
