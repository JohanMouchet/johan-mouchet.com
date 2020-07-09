import * as React from "react";
import cx from "classnames";
import "./Button.scss";

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
    "o-button",
    size && `o-button--${size}`,
    variant && `o-button--${variant}`,
    typeof block === "string"
      ? `o-button--block${"-" + block}`
      : block === true && "o-button--block",
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
