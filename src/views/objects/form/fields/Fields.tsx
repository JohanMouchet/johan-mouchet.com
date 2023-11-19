import clsx, { ClassValue } from "clsx";
import styles from "./Fields.module.scss";

export const Field = ({
  id,
  type = "text",
  name,
  value,
  className,
  ...props
}: {
  id?: string;
  type?:
    | "text"
    | "number"
    | "email"
    | "url"
    | "tel"
    | "password"
    | "search"
    | "color"
    | "date"
    | "time";
  name: string;
  value?: string;
  className?: ClassValue;
} & Omit<React.HTMLProps<HTMLInputElement>, "type">) => {
  const classNames = clsx(
    styles["o-form__field"],
    styles[`o-form__field--${type}`],
    className
  );

  return (
    <input
      id={id}
      type={type}
      name={name}
      defaultValue={value}
      className={classNames}
      {...props}
    />
  );
};

export const Select = ({
  id,
  name,
  options,
  className,
  ...props
}: {
  id?: string;
  name: string;
  options: React.HTMLProps<HTMLOptionElement>[];
  className?: ClassValue;
} & React.HTMLProps<HTMLSelectElement>) => {
  if (!options?.length) {
    return null;
  }

  const classNames = clsx(
    styles["o-form__field"],
    styles["o-form__field--select"],
    className
  );

  return (
    <select id={id} name={name} className={classNames} {...props}>
      {options.map((option, i) => (
        <option defaultValue={option.value} {...option} key={i}>
          {option.children}
        </option>
      ))}
    </select>
  );
};

export const Textarea = ({
  id,
  name,
  children,
  className,
  ...props
}: {
  id?: string;
  name: string;
  children?: string;
  className?: ClassValue;
} & React.HTMLProps<HTMLTextAreaElement>) => {
  const classNames = clsx(
    styles["o-form__field"],
    styles["o-form__field--textarea"],
    className
  );

  return (
    <textarea id={id} name={name} className={classNames} {...props}>
      {children}
    </textarea>
  );
};
