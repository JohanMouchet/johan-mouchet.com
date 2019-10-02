// @flow

import * as React from "react";
import cx from "classnames";
import "./button.scss";

type ButtonProps = {
  type: string,
  text: string,
  [url]: string,
  [metadata.contextClass]: string,
  [metadata.modifierClasses]: array,
  [metadata.additionalClasses]: array,
  [metadata.attributes]: object
};

const Button = (props: ButtonProps) => {
  const { prop1, prop2 } = props;

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
      {props.text | raw}
    </button>
  ) : (
    <a className={ButtonClass} href={props.url} {...props.metadata.attributes}>
      {props.text | raw}
    </a>
  );
};

Button.defaultProps = {
  prop1: 2
};

export { Button };

type SocialButtonProps = {
  url: string,
  iconPath: string,
  text: string,
  [counter]: int,
  [metadata.contextClass]: string,
  [metadata.modifierClasses]: array,
  [metadata.additionalClasses]: array,
  [metadata.attributes]: object
};

const SocialButton = (props: SocialButtonProps) => {
  const { prop1, prop2 } = props;

  const SocialButtonClass = cx(
    "o-button",
    props.metadata.contextClass,
    props.metadata.modifierClasses,
    props.metadata.additionalClasses,
    "o-button--social",
    {
      "SocialButton--prop1": prop1
    }
  );

  return (
    <a
      className={SocialButtonClass}
      href={props.url}
      target="_blank"
      rel="noopener"
      {...props.metadata.attributes}
    >
      <span className="o-button__icon">{props.iconPath | raw}</span>
      <span className="o-button__text">{props.text | raw}</span>
      {props.counter && (
        <span className="o-button__counter">{props.counter}</span>
      )}
    </a>
  );
};

SocialButton.defaultProps = {
  prop1: 2
};

export { SocialButton };

type SocialButtonBadgeProps = {
  url: string,
  iconPath: string,
  [metadata.contextClass]: string,
  [metadata.modifierClasses]: array,
  [metadata.additionalClasses]: array,
  [metadata.attributes]: object
};

const SocialButtonBadge = (props: SocialButtonBadgeProps) => {
  const { prop1, prop2 } = props;

  const SocialButtonBadgeClass = cx(
    "o-button",
    props.metadata.contextClass,
    props.metadata.modifierClasses,
    props.metadata.additionalClasses,
    "o-button--social",
    "o-button--social-badge",
    {
      "SocialButtonBadge--prop1": prop1
    }
  );

  return (
    <a
      className={SocialButtonBadgeClass}
      href={props.url}
      target="_blank"
      rel="noopener"
      {...props.metadata.attributes}
    >
      <span className="o-button__icon">{props.iconPath | raw}</span>
    </a>
  );
};

SocialButtonBadge.defaultProps = {
  prop1: 2
};

export { SocialButtonBadge };
