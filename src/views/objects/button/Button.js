// @flow

import * as React from "react";
import cx from "classnames";
import "./button.scss";

/**
 * @param {string} [type = 'anchor']            - Button type: anchor|button
 * @param {string} text                         - Button text
 * @param {string} [url]                        - Button URL if type = 'anchor'
 * @param {string} [metadata.contextClass]      - Button context class
 * @param {array}  [metadata.modifierClasses]   - Button modifiers classes
 * @param {array}  [metadata.additionalClasses] - Button additional classes
 * @param {object} [metadata.attributes]        - Button attributes
 */

const Button = (props: Props) => {
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

/**
 * @param {string} url                          - Button URL
 * @param {string} iconPath                     - Button icon path
 * @param {string} text                         - Button text
 * @param {int}    [counter]                    - Button counter
 * @param {string} [metadata.contextClass]      - Button context class
 * @param {array}  [metadata.modifierClasses]   - Button modifiers classes
 * @param {array}  [metadata.additionalClasses] - Button additional classes
 * @param {object} [metadata.attributes]        - Button attributes
 */

const SocialButton = (props: Props) => {
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
      <span className="o-button__icon">
        {props.iconPath | raw}
      </span>
      <span className="o-button__text">
        {props.text | raw}
      </span>
      {props.counter && (
        <span className="o-button__counter">
          {props.counter}
        </span>
      )}
    </a>
  );
};

SocialButton.defaultProps = {
  prop1: 2
};

export { SocialButton };

/**
 * @param {string} url                          - Button URL
 * @param {string} iconPath                     - Button icon path
 * @param {string} [metadata.contextClass]      - Button context class
 * @param {array}  [metadata.modifierClasses]   - Button modifiers classes
 * @param {array}  [metadata.additionalClasses] - Button additional classes
 * @param {object} [metadata.attributes]        - Button attributes
 */

const SocialButtonBadge = (props: Props) => {
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
      <span className="o-button__icon">
        {props.iconPath | raw}
      </span>
    </a>
  );
};

SocialButtonBadge.defaultProps = {
  prop1: 2
};

export { SocialButtonBadge };
