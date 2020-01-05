// @flow

import * as React from "react";
import { useState } from "react";
import cx from "classnames";
import "./Form.scss";

type LabelProps = {
  id?: string,
  block: boolean,
  className?: string | Array<string> | Object,
  children?: Node
};

const Label = (props: LabelProps) => {
  const { id, block, className, children } = props;

  const classNames = cx(
    "o-form__label",
    (block || !children) && "o-form__label--block",
    className
  );

  return (
    <label htmlFor={id} className={classNames}>
      {children || "&nbsp;"}
    </label>
  );
};

export { Label };

type FieldProps = {
  id?: string,
  type: string,
  name: string,
  value?: string,
  variant?: "no-corner-left" | "no-corner-right",
  className?: string | Array<string> | Object,
  attributes?: { [key: string]: any }
};

const Field = (props: FieldProps) => {
  const { id, type, name, value, variant, className, attributes } = props;

  const classNames = cx(
    "o-form__field",
    `o-form__field--${type}`,
    variant && `o-form__field--${variant}`,
    className
  );

  return (
    <input
      id={id}
      type={type}
      name={name}
      defaultValue={value}
      className={classNames}
      {...attributes}
    />
  );
};

export { Field };

type ToggleProps = {
  id?: string,
  type: "checkbox" | "radio",
  name?: string,
  value?: string,
  checked?: boolean,
  className?: string | Array<string> | Object,
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
    className,
    attributes,
    children
  } = props;
  const [check] = useState(checked);

  const handleChange = check => (check = !check);

  const classNames = cx("o-form__toggle", `o-form__toggle--${type}`, className);

  return (
    <label className={classNames} {...attributes}>
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
  type: "checkbox"
};

export { Toggle };

type FileProps = {
  id?: string,
  name: string,
  multipleCaption?: string,
  className?: string | Array<string> | Object,
  attributes?: { [key: string]: any },
  children?: Node
};

const File = (props: FileProps) => {
  const { id, name, multipleCaption, className, attributes, children } = props;

  const classNames = cx("o-form__file", "o-button", "js-form-file", className);

  return (
    <label className={classNames}>
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
  className?: string | Array<string> | Object,
  attributes?: { [key: string]: any }
};

const Select = (props: SelectProps) => {
  const { id, name, options, className, attributes } = props;

  const classNames = cx("o-form__field", "o-form__field--select", className);

  return !options ? null : (
    <select id={id} name={name} className={classNames} {...attributes}>
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

export { Select };

type TextareaProps = {
  id?: string,
  name: string,
  className?: string | Array<string> | Object,
  attributes?: { [key: string]: any },
  children?: Node
};

const Textarea = (props: TextareaProps) => {
  const { id, name, className, attributes, children } = props;

  const classNames = cx("o-form__field", "o-form__field--textarea", className);

  return (
    <textarea id={id} name={name} className={classNames} {...attributes}>
      {children}
    </textarea>
  );
};

export { Textarea };

type RangeProps = {
  id?: string,
  name: string,
  className?: string | Array<string> | Object,
  attributes?: { [key: string]: any }
};

const Range = (props: RangeProps) => {
  const { id, name, className, attributes } = props;

  const classNames = cx("o-form__range", className);

  return (
    <input
      id={id}
      type="range"
      name={name}
      className={classNames}
      {...attributes}
    />
  );
};

export { Range };
