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
  className?: string | Array | Object,
  attributes?: { [key: string]: any },
  children?: Node
};

const Button = (props: ButtonProps) => {
  const {
    type,
    url,
    variant,
    size,
    block,
    className,
    attributes,
    children
  } = props;

  const ButtonClass = cx(
    "o-button",
    {
      [`o-button--${variant}`]: variant,
      [`o-button--${size}`]: size,
      "o-button--block": block === true,
      [`o-button--block${"-" + block}`]: typeof block === "string"
    },
    className
  );

  return type === "anchor" ? (
    <a className={ButtonClass} href={url} {...attributes}>
      {children}
    </a>
  ) : (
    <button className={ButtonClass} type={type} {...attributes}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button"
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
  className?: string | Array | Object,
  attributes?: { [key: string]: any },
  children?: Node
};

const ButtonSocial = (props: ButtonSocialProps) => {
  const {
    url,
    icon,
    counter,
    variant,
    size,
    block,
    className,
    attributes,
    children
  } = props;

  const ButtonSocialClass = cx(
    "o-button",
    {
      [`o-button--${variant}`]: variant,
      [`o-button--${size}`]: size,
      "o-button--block": block === true,
      [`o-button--block${"-" + block}`]: typeof block === "string"
    },
    "o-button--social",
    className
  );

  return (
    <a
      className={ButtonSocialClass}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      {...attributes}
    >
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
  className?: string | Array | Object,
  attributes?: { [key: string]: any }
};

const ButtonSocialBadge = (props: ButtonSocialBadgeProps) => {
  const { url, icon, variant, className, attributes } = props;

  const ButtonSocialBadgeClass = cx(
    "o-button",
    {
      [`o-button--${variant}`]: variant
    },
    "o-button--social",
    "o-button--social-badge",
    className
  );

  return (
    <a
      className={ButtonSocialBadgeClass}
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
