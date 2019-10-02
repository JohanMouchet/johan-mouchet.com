// @flow

import * as React from "react";
import cx from "classnames";
import "./form.scss";

type LabelProps = {
  for: ?string,
  metadata: {
    contextClass: ?string,
    additionalClasses: ?Array<string>,
    modifierClasses: ?Array<string>
  }
};

const Label = (props: LabelProps, children) => {
  const { prop1, prop2 } = props;

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
    <label
      for={props.for}
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
  id: ?string,
  type: string,
  name: string,
  value: ?string,
  metadata: {
    contextClass: ?string,
    additionalClasses: ?Array<string>,
    modifierClasses: ?Array<string>,
    attributes: ?{ [key: string]: any }
  }
};

const Field = (props: FieldProps) => {
  const { prop1, prop2 } = props;

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
    <input
      id={props.id}
      type={props.type}
      name={props.name}
      value={props.value}
      className={`${FieldClass} o-form__field--${props.type}`}
      {...props.metadata.attributes}
    />
  );
};

Field.defaultProps = {
  prop1: 2
};

export { Field };

type ToggleProps = {
  id: ?string,
  type: string,
  name: ?string,
  value: ?string,
  metadata: {
    contextClass: ?string,
    additionalClasses: ?Array<string>,
    attributes: ?{ [key: string]: any }
  }
};

const Toggle = (props: ToggleProps, children) => {
  const { prop1, prop2 } = props;

  const ToggleClass = cx(
    "o-form__toggle",
    props.metadata.contextClass,
    props.metadata.additionalClasses,
    {
      "Toggle--prop1": prop1
    }
  );

  return (
    <label
      className={`${ToggleClass} o-form__toggle--${props.type}`}
      {...props.metadata.attributes}
    >
      <input
        id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        className="o-form__toggle-input"
        {...props.metadata.attributes}
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
  id: ?string,
  name: string,
  multipleCaption: ?string,
  metadata: {
    contextClass: ?string,
    additionalClasses: ?Array<string>,
    attributes: ?{ [key: string]: any }
  }
};

const File = (props: FileProps, children) => {
  const { prop1, prop2 } = props;

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
      <input
        id={props.id}
        type="file"
        name={props.name}
        className="o-form__file-input js-form-file-input"
        data-multiple-caption={
          props.multipleCaption
            ? props.multipleCaption
            : "{count} files selected"
        }
        {...props.metadata.attributes}
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
  id: ?string,
  name: string,
  metadata: {
    contextClass: ?string,
    additionalClasses: ?Array<string>,
    attributes: ?{ [key: string]: any }
  },
  options: {
    text: string,
    value: string,
    attributes: Array<string>
  }
};

const Select = (props: SelectProps) => {
  const { prop1, prop2 } = props;

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
    <select
      id={props.id}
      name={props.name}
      className={`${SelectClass} o-form__field--select`}
      {...props.metadata.attributes}
    >
      {props.options.map(option => (
        <option value={props.value} {...props.metadata.attributes}>
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
  id: ?string,
  name: string,
  metadata: {
    contextClass: ?string,
    additionalClasses: ?Array<string>,
    attributes: ?{ [key: string]: any }
  }
};

const Textarea = (props: TextareaProps, children) => {
  const { prop1, prop2 } = props;

  const TextareaClass = cx(
    "o-form__field",
    props.metadata.contextClass,
    props.metadata.additionalClasses,
    {
      "Textarea--prop1": prop1
    }
  );

  return (
    <textarea
      id={props.id}
      name={props.name}
      className={`${TextareaClass} o-form__field--textarea`}
      {...props.metadata.attributes}
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
  id: ?string,
  name: string,
  metadata: {
    contextClass: ?string,
    additionalClasses: ?Array<string>,
    attributes: ?{ [key: string]: any }
  }
};

const Range = (props: RangeProps) => {
  const { prop1, prop2 } = props;

  const RangeClass = cx(
    "o-form__range",
    props.metadata.contextClass,
    props.metadata.additionalClasses,
    {
      "Range--prop1": prop1
    }
  );

  return (
    <input
      id={props.id}
      type="range"
      name={props.name}
      className={RangeClass}
      {...props.metadata.attributes}
    />
  );
};

Range.defaultProps = {
  prop1: 2
};

export { Range };
