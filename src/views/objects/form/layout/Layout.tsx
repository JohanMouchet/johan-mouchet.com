import React from "react";
import cx from "classnames";
import "./Layout.scss";

type FieldsetProps = {
  legend?: string;
  className?: string | string[] | { [key: string]: boolean };
  children?: React.ReactNode;
};

const Fieldset: React.FC<FieldsetProps> = ({ legend, className, children }) => {
  const classNames = cx("o-form__fieldset", className);

  return (
    <fieldset className={classNames}>
      <legend className="o-form__legend">{legend}</legend>
      {children}
    </fieldset>
  );
};

export { Fieldset };

type FormGroupProps = {
  variant?: "success" | "error" | "warning";
  detail?: string;
  children?: React.ReactNode;
};

const FormGroup: React.FC<FormGroupProps> = ({ variant, detail, children }) => {
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
  id?: string;
  block: boolean;
  className?: string | string[] | { [key: string]: boolean };
  children?: React.ReactNode;
};

const Label: React.FC<LabelProps> = ({ id, block, className, children }) => {
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
