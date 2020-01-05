// @flow

import * as React from "react";
import cx from "classnames";
import "./Fields.scss";

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
