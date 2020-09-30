import React, { useState } from "react";
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

const Field: React.FC<FieldProps> = ({
  id,
  type,
  name,
  value,
  className,
  ...attributes
}) => {
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
    attributes?: string[];
  }>;
  className?: string | string[] | { [key: string]: boolean };
  attributes?: boolean | number | string;
};

const Select: React.FC<SelectProps> = ({
  id,
  name,
  options,
  className,
  attributes,
}) => {
  const classNames = cx("o-form__field", "o-form__field--select", className);

  return !options?.length ? null : (
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

const Textarea: React.FC<TextareaProps> = ({
  id,
  name,
  className,
  children,
  ...attributes
}) => {
  const [value, setValue] = useState(children);
  const classNames = cx("o-form__field", "o-form__field--textarea", className);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <textarea
      id={id}
      name={name}
      className={classNames}
      value={value}
      onChange={handleChange}
      {...attributes}
    />
  );
};

export { Textarea };
