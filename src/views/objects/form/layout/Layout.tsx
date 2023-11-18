import clsx, { ClassValue } from "clsx";
import styles from "./Layout.module.scss";

export const Fieldset = ({
  legend,
  children,
  className,
  ...props
}: {
  legend?: string;
  children?: React.ReactNode;
  className?: ClassValue;
} & React.HTMLProps<HTMLFieldSetElement>) => {
  return (
    <fieldset
      className={clsx(styles["o-form__fieldset"], className)}
      {...props}
    >
      {legend && <legend className={styles["o-form__legend"]}>{legend}</legend>}
      {children}
    </fieldset>
  );
};

export const FormGroup = ({
  variant,
  detail,
  children,
  className,
  ...props
}: {
  variant?: "success" | "error" | "warning";
  detail?: string;
  children?: React.ReactNode;
  className?: ClassValue;
} & React.HTMLProps<HTMLDivElement>) => {
  const classNames = clsx(
    styles["o-form__group"],
    variant && styles[`o-form__group--${variant}`],
    className
  );

  return (
    <div className={classNames} {...props}>
      {children}
      <span className={styles["o-form__group-detail"]}>{detail}</span>
    </div>
  );
};

export const Label = ({
  id,
  block,
  children,
  className,
  ...props
}: {
  id?: string;
  block?: boolean;
  children?: React.ReactNode;
  className?: ClassValue;
} & React.HTMLProps<HTMLLabelElement>) => {
  const classNames = clsx(
    styles["o-form__label"],
    (block || !children) && styles["o-form__label--block"],
    className
  );

  return (
    <label htmlFor={id} className={classNames} {...props}>
      {children || <>&nbsp;</>}
    </label>
  );
};
