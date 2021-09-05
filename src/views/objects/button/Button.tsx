import React from "react";
import cx from "classnames";
import styles from "./Button.module.scss";

type Props = {
  type: "anchor" | "button" | "submit" | "reset";
  url?: string;
  variant?: "primary" | "secondary" | "linkedIn";
  size?: "sm" | "lg";
  block?: boolean | "@sm" | "@md";
  className?: string | string[] | { [key: string]: boolean };
  attributes?: boolean | number | string;
  children?: React.ReactNode;
};

const Button: React.FC<Props> = ({
  type = "button",
  url,
  variant,
  size,
  block,
  className,
  children,
  ...attributes
}) => {
  const classNames = cx(
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
    <a className={classNames} href={url} {...attributes}>
      {children}
    </a>
  ) : (
    <button className={classNames} type={type} {...attributes}>
      {children}
    </button>
  );
};

export default Button;
