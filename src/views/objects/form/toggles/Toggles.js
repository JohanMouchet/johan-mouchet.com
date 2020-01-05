// @flow

import * as React from "react";
import { useState } from "react";
import cx from "classnames";
import "./Toggles.scss";

type Props = {
  id?: string,
  type: "checkbox" | "radio",
  name?: string,
  value?: string,
  checked?: boolean,
  className?: string | Array<string> | Object,
  attributes?: { [key: string]: any },
  children?: Node
};

// TODO: fix checked state

const Toggle = (props: Props) => {
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
