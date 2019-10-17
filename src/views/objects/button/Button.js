// @flow

import * as React from "react";
import cx from "classnames";
import "./button.scss";

type ButtonProps = {
  type: string,
  url?: string,
  metadata?: {
    contextClass?: string,
    additionalClasses?: Array<string>,
    modifierClasses?: Array<string>,
    attributes?: { [key: string]: any }
  },
  children?: Node
};

const Button = (props: ButtonProps) => {
  const { type, url, metadata = {}, children } = props;

  const ButtonClass = cx(
    "o-button",
    metadata.contextClass,
    metadata.modifierClasses,
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
  url: string,
  icon: string,
  counter?: number,
  metadata?: {
    contextClass?: string,
    additionalClasses?: Array<string>,
    modifierClasses?: Array<string>,
    attributes?: { [key: string]: any }
  },
  children?: Node
};

const ButtonSocial = (props: ButtonSocialProps) => {
  const { url, icon, counter, metadata = {}, children } = props;

  const ButtonSocialClass = cx(
    "o-button",
    metadata.contextClass,
    metadata.modifierClasses,
    metadata.additionalClasses,
    "o-button--social"
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
  url: string,
  icon: string,
  metadata?: {
    contextClass?: string,
    additionalClasses?: Array<string>,
    modifierClasses?: Array<string>,
    attributes?: { [key: string]: any }
  }
};

const ButtonSocialBadge = (props: ButtonSocialBadgeProps) => {
  const { url, icon, metadata = {} } = props;

  const ButtonSocialBadgeClass = cx(
    "o-button",
    metadata.contextClass,
    metadata.modifierClasses,
    metadata.additionalClasses,
    "o-button--social",
    "o-button--social-badge"
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
