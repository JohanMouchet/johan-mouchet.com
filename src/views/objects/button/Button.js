// @flow

import * as React from "react";
import cx from "classnames";
import "./button.scss";

type ButtonProps = {
  type: string,
  url?: string,
  metadata: {
    contextClass?: string,
    additionalClasses?: Array<string>,
    modifierClasses?: Array<string>,
    attributes?: { [key: string]: any }
  },
  children?: Node
};

const Button = (props: ButtonProps) => {
  const { prop1, prop2, children } = props;

  const ButtonClass = cx(
    "o-button",
    props.metadata.contextClass,
    props.metadata.modifierClasses,
    props.metadata.additionalClasses,
    {
      "Button--prop1": prop1
    }
  );

  return props.type === "button" ? (
    <button className={ButtonClass} {...props.metadata.attributes}>
      {children}
    </button>
  ) : (
    <a className={ButtonClass} href={props.url} {...props.metadata.attributes}>
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
  metadata: {
    contextClass?: string,
    additionalClasses?: Array<string>,
    modifierClasses?: Array<string>,
    attributes?: { [key: string]: any }
  },
  children?: Node
};

const ButtonSocial = (props: ButtonSocialProps) => {
  const { prop1, prop2, children } = props;

  const ButtonSocialClass = cx(
    "o-button",
    props.metadata.contextClass,
    props.metadata.modifierClasses,
    props.metadata.additionalClasses,
    "o-button--social",
    {
      "ButtonSocial--prop1": prop1
    }
  );

  return (
    <a
      className={ButtonSocialClass}
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      {...props.metadata.attributes}
    >
      <span className="o-button__icon">{props.icon}</span>
      <span className="o-button__text">{children}</span>
      {props.counter && (
        <span className="o-button__counter">{props.counter}</span>
      )}
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
  metadata: {
    contextClass?: string,
    additionalClasses?: Array<string>,
    modifierClasses?: Array<string>,
    attributes?: { [key: string]: any }
  }
};

const ButtonSocialBadge = (props: ButtonSocialBadgeProps) => {
  const { prop1, prop2 } = props;

  const ButtonSocialBadgeClass = cx(
    "o-button",
    props.metadata.contextClass,
    props.metadata.modifierClasses,
    props.metadata.additionalClasses,
    "o-button--social",
    "o-button--social-badge",
    {
      "ButtonSocialBadge--prop1": prop1
    }
  );

  return (
    <a
      className={ButtonSocialBadgeClass}
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      {...props.metadata.attributes}
    >
      <span className="o-button__icon">{props.icon}</span>
    </a>
  );
};

ButtonSocialBadge.defaultProps = {
  prop1: 2
};

export { ButtonSocialBadge };
