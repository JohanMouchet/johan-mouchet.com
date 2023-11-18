import React from "react";
import { useState } from "react";
import cx from "classnames";
import styles from "./Toggles.module.scss";

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

  const classNames = cx(
    styles["o-form__toggle"],
    styles[`o-form__toggle--${type}`],
    className
  );

  return (
    <label className={classNames} {...attributes}>
      <input
        id={id}
        type={type}
        name={name}
        defaultValue={value}
        className="o-form__toggle-input u-is-visually-hidden"
        defaultChecked={check}
        onChange={() => handleChange((check) => !check)}
        {...attributes}
      />
      <span className={styles["o-form__toggle-icon"]}></span>
      {children && (
        <span className={styles["o-form__toggle-text"]}>{children}</span>
      )}
    </label>
  );
};

type CheckboxProps = Omit<Props, "type">;

const Checkbox: React.FC<CheckboxProps> = (props) => (
  <Toggle {...props} type="checkbox" />
);

type RadioProps = Omit<Props, "type">;

const Radio: React.FC<RadioProps> = (props) => (
  <Toggle {...props} type="radio" />
);

export { Checkbox, Radio };
