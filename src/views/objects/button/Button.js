// @flow

import * as React from "react";
import cx from "classnames";
import "./Button.scss";

type ButtonProps = {
  type: "anchor" | "button" | "submit" | "reset",
  url?: string,
  variant?: "primary" | "secondary",
  size?: "sm" | "lg",
  block?: boolean | "@sm" | "@md",
  className?: string | Array<string> | Object,
  attributes?: { [key: string]: any },
  children?: Node,
};

const Button = ({
  type = "button",
  url,
  variant,
  size,
  block,
  className,
  attributes,
  children,
}: ButtonProps) => {
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

export { Button };

type ButtonSocialProps = {
  url: string,
  icon: string,
  counter?: number,
  variant?:
    | "primary"
    | "secondary"
    | "social-twitter"
    | "social-facebook"
    | "social-googleplus"
    | "social-linkedin"
    | "social-pinterest",
  size?: "sm" | "lg",
  block?: boolean | "sm" | "md",
  className?: string | Array<string> | Object,
  attributes?: { [key: string]: any },
  children?: Node,
};

const ButtonSocial = ({
  url,
  icon,
  counter,
  variant,
  size,
  block,
  className,
  attributes,
  children,
}: ButtonSocialProps) => {
  const classNames = cx(
    "o-button",
    size && `o-button--${size}`,
    variant && `o-button--${variant}`,
    typeof block === "string"
      ? `o-button--block${"-" + block}`
      : block === true && "o-button--block",
    "o-button--social",
    className
  );

  return (
    <a className={classNames} href={url} {...attributes}>
      <span className="o-button__icon">{icon}</span>
      <span className="o-button__text">{children}</span>
      {counter && <span className="o-button__counter">{counter}</span>}
    </a>
  );
};

export { ButtonSocial };

type ButtonSocialBadgeProps = {
  url: string,
  icon: string,
  variant?:
    | "primary"
    | "secondary"
    | "social-twitter"
    | "social-facebook"
    | "social-googleplus"
    | "social-linkedin"
    | "social-pinterest",
  className?: string | Array<string> | Object,
  attributes?: { [key: string]: any },
};

const ButtonSocialBadge = ({
  url,
  icon,
  variant,
  className,
  attributes,
}: ButtonSocialBadgeProps) => {
  const classNames = cx(
    "o-button",
    variant && `o-button--${variant}`,
    "o-button--social",
    "o-button--social-badge",
    className
  );

  return (
    <a
      className={classNames}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      {...attributes}
    >
      <span className="o-button__icon">{icon}</span>
    </a>
  );
};

export { ButtonSocialBadge };
