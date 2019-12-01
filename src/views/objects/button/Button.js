// @flow

import * as React from "react";
import cx from "classnames";
import "./Button.scss";

type ButtonProps = {
  variant?: "primary" | "secondary",
  size?: "sm" | "lg",
  block?: Boolean | "@sm" | "@md",
  type: string,
  url?: string,
  metadata?: {
    contextClass?: string,
    additionalClasses?: Array<string>,
    attributes?: { [key: string]: any }
  },
  children?: Node
};

const Button = (props: ButtonProps) => {
  const { variant, size, block, type, url, metadata = {}, children } = props;

  const ButtonClass = cx(
    "o-button",
    {
      [`o-button--${variant}`]: variant,
      [`o-button--${size}`]: size,
      "o-button--block": block === true,
      [`o-button--block${"-" + block}`]: typeof block === "string"
    },
    metadata.contextClass,
    metadata.additionalClasses
  );

  return type === "button" ? (
    <button className={ButtonClass} {...metadata.attributes}>
      {children}
    </button>
  ) : (
    <a className={ButtonClass} href={url} {...metadata.attributes}>
      {children}
    </a>
  );
};

Button.defaultProps = {
  prop1: 2
};

export { Button };

type ButtonSocialProps = {
  variant?:
    | "primary"
    | "secondary"
    | "social-twitter"
    | "social-facebook"
    | "social-googleplus"
    | "social-linkedin"
    | "social-pinterest",
  size?: "sm" | "lg",
  block?: Boolean | "sm" | "md",
  url: string,
  icon: string,
  counter?: number,
  metadata?: {
    contextClass?: string,
    additionalClasses?: Array<string>,
    attributes?: { [key: string]: any }
  },
  children?: Node
};

const ButtonSocial = (props: ButtonSocialProps) => {
  const {
    variant,
    size,
    block,
    url,
    icon,
    counter,
    metadata = {},
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
    metadata.contextClass,
    metadata.additionalClasses
  );

  return (
    <a
      className={ButtonSocialClass}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      {...metadata.attributes}
    >
      <span className="o-button__icon">{icon}</span>
      <span className="o-button__text">{children}</span>
      {counter && <span className="o-button__counter">{counter}</span>}
    </a>
  );
};

ButtonSocial.defaultProps = {
  prop1: 2
};

export { ButtonSocial };

type ButtonSocialBadgeProps = {
  variant?:
    | "primary"
    | "secondary"
    | "social-twitter"
    | "social-facebook"
    | "social-googleplus"
    | "social-linkedin"
    | "social-pinterest",
  size?: "sm" | "lg",
  block?: Boolean | "sm" | "md",
  url: string,
  icon: string,
  metadata?: {
    contextClass?: string,
    additionalClasses?: Array<string>,
    attributes?: { [key: string]: any }
  }
};

const ButtonSocialBadge = (props: ButtonSocialBadgeProps) => {
  const { variant, url, icon, metadata = {} } = props;

  const ButtonSocialBadgeClass = cx(
    "o-button",
    {
      [`o-button--${variant}`]: variant
    },
    "o-button--social",
    "o-button--social-badge",
    metadata.contextClass,
    metadata.additionalClasses
  );

  return (
    <a
      className={ButtonSocialBadgeClass}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      {...metadata.attributes}
    >
      <span className="o-button__icon">{icon}</span>
    </a>
  );
};

ButtonSocialBadge.defaultProps = {
  prop1: 2
};

export { ButtonSocialBadge };
