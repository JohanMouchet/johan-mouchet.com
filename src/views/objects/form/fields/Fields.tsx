import * as React from "react";
import cx from "classnames";
import "./Fields.scss";

type FieldProps = {
  id?: string;
  type: string;
  name: string;
  value?: string;
  className?: string | string[] | { [key: string]: boolean };
  attributes?: boolean | number | string;
};

const Field = ({
  id,
  type,
  name,
  value,
  className,
  ...attributes
}: FieldProps) => {
  const classNames = cx("o-form__field", `o-form__field--${type}`, className);

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
  id?: string;
  name: string;
  options: Array<{
    text: string;
    value: string;
    attributes: string[];
  }>;
  className?: string | string[] | { [key: string]: boolean };
  attributes?: boolean | number | string;
};

const Select = ({ id, name, options, className, attributes }: SelectProps) => {
  const classNames = cx("o-form__field", "o-form__field--select", className);

  return !options ? null : (
    <select id={id} name={name} className={classNames} {...attributes}>
      {options.map((option) => (
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
  id?: string;
  name: string;
  className?: string | string[] | { [key: string]: boolean };
  attributes?: boolean | number | string;
  children?: string;
};

const Textarea = ({
  id,
  name,
  className,
  children,
  ...attributes
}: TextareaProps) => {
  const classNames = cx("o-form__field", "o-form__field--textarea", className);

  return (
    <textarea id={id} name={name} className={classNames} {...attributes}>
      {children}
    </textarea>
  );
};

export { Textarea };
