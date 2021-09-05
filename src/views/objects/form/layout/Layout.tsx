import React from "react";
import cx from "classnames";
import styles from "./Layout.module.scss";

type FieldsetProps = {
  legend?: string;
  className?: string | string[] | { [key: string]: boolean };
  children?: React.ReactNode;
};

const Fieldset: React.FC<FieldsetProps> = ({ legend, className, children }) => {
  const classNames = cx(styles["o-form__fieldset"], className);

  return (
    <fieldset className={classNames}>
      <legend className={styles["o-form__legend"]}>{legend}</legend>
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
    styles["o-form__group"],
    variant && styles[`o-form__group--${variant}`]
  );

  return (
    <div className={classNames}>
      {children}
      <span className={styles["o-form__group-detail"]}>{detail}</span>
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
    styles["o-form__label"],
    (block || !children) && styles["o-form__label--block"],
    className
  );

  return (
    <label htmlFor={id} className={classNames}>
      {children || "&nbsp;"}
    </label>
  );
};

export { Label };
