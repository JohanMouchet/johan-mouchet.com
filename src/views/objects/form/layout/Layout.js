// @flow

import * as React from "react";
import cx from "classnames";
import "./Layout.scss";

type FieldsetProps = {
  legend?: string,
  className?: string | Array<string> | Object,
  children?: Node,
};

const Fieldset = ({ legend, className, children }: FieldsetProps) => {
  const classNames = cx("o-form__fieldset", className);

  return (
    <fieldset className={classNames}>
      <legend class="o-form__legend">{legend}</legend>
      {children}
    </fieldset>
  );
};

export { Fieldset };

type FormGroupProps = {
  variant?: "success" | "error" | "warning",
  detail?: string,
  children?: Node,
};

const FormGroup = ({ variant, detail, children }: FormGroupProps) => {
  const classNames = cx(
    "o-form__group",
    variant && `o-form__group--${variant}`
  );

  return (
    <div className={classNames}>
      {children}
      <span className="o-form__group-detail">{detail}</span>
    </div>
  );
};

export { FormGroup };

type LabelProps = {
  id?: string,
  block: boolean,
  className?: string | Array<string> | Object,
  children?: Node,
};

const Label = ({ id, block, className, children }: LabelProps) => {
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
