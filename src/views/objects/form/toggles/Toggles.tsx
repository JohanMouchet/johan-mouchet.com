import * as React from "react";
import { useState } from "react";
import cx from "classnames";
import "./Toggles.scss";

type Props = {
  id?: string;
  type: "checkbox" | "radio";
  name?: string;
  value?: string;
  checked?: boolean;
  className?: string | string[] | { [key: string]: boolean };
  attributes?: boolean | number | string;
  children?: React.ReactNode;
};

// TODO: fix checked state

const Toggle: React.FC<Props> = ({
  id,
  type,
  name,
  value,
  checked,
  className,
  children,
  ...attributes
}) => {
  const [check, handleChange] = useState(checked);

  const classNames = cx("o-form__toggle", `o-form__toggle--${type}`, className);

  return (
    <label className={classNames} {...attributes}>
      <input
        id={id}
        type={type}
        name={name}
        defaultValue={value}
        className="o-form__toggle-input"
        defaultChecked={check}
        onChange={() => handleChange((check) => !check)}
        {...attributes}
      />
      <span className="o-form__toggle-icon"></span>
      {children && <span className="o-form__toggle-text">{children}</span>}
    </label>
  );
};

const Checkbox: React.FC<Props> = (props: Props) =>
  Toggle({ ...props, type: "checkbox" });

const Radio: React.FC<Props> = (props: Props) =>
  Toggle({ ...props, type: "radio" });

export { Checkbox, Radio };
