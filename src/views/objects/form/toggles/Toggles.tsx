import clsx, { ClassValue } from "clsx";
import { useState } from "react";
import styles from "./Toggles.module.scss";

const Toggle = ({
  id,
  type,
  name,
  value,
  checked,
  children,
  className,
  ...props
}: {
  id?: string;
  type: "checkbox" | "radio";
  name: string;
  value?: string;
  checked?: boolean;
  children?: React.ReactNode;
  className?: ClassValue;
} & React.HTMLProps<HTMLInputElement>) => {
  const [check, handleChange] = useState(checked);

  const classNames = clsx(
    styles["o-form__toggle"],
    styles[`o-form__toggle--${type}`],
    className
  );

  return (
    <label className={classNames}>
      <input
        id={id}
        type={type}
        name={name}
        defaultValue={value}
        className={clsx(styles["o-form__toggle-input"], "u-is-visually-hidden")}
        defaultChecked={check}
        onChange={() => handleChange((check) => !check)}
        {...props}
      />
      <span className={styles["o-form__toggle-icon"]} />
      {children && (
        <span className={styles["o-form__toggle-text"]}>{children}</span>
      )}
    </label>
  );
};

export const Checkbox = ({
  ...props
}: Omit<React.ComponentProps<typeof Toggle>, "type">) => (
  <Toggle type="checkbox" {...props} />
);

export const Radio = ({
  ...props
}: Omit<React.ComponentProps<typeof Toggle>, "type"> & { value: string }) => (
  <Toggle type="radio" {...props} />
);
