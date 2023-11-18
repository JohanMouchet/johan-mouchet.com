import clsx, { ClassValue } from "clsx";
import styles from "./Button.module.scss";

export const Button = ({
  type = "button",
  url,
  variant,
  size,
  block,
  children,
  className,
  ...props
}: {
  type: "anchor" | "button" | "submit" | "reset";
  url?: string;
  variant?: "primary" | "secondary" | "linkedin";
  size?: "sm" | "lg";
  block?: boolean | "@sm" | "@md";
  children?: React.ReactNode;
  className?: ClassValue;
}) => {
  const classNames = clsx(
    styles["o-button"],
    size && styles[`o-button--${size}`],
    variant && styles[`o-button--${variant}`],
    block &&
      styles[
        `o-button--block${
          typeof block === "string" ? `-${block}` : block === true && ""
        }`
      ],
    className
  );

  return type === "anchor" ? (
    <a className={classNames} href={url} {...props}>
      {children}
    </a>
  ) : (
    <button className={classNames} type={type} {...props}>
      {children}
    </button>
  );
};
