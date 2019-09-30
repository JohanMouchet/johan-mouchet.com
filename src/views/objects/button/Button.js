// @flow

import * as React from "react";
import cx from "classnames";
import "./___.scss";

/**
 * Button
 *
 * @param {string} [type = 'anchor']            - Button type: anchor|button
 * @param {string} text                         - Button text
 * @param {string} [url]                        - Button URL if type = 'anchor'
 * @param {string} [metadata.contextClass]      - Button context class
 * @param {array}  [metadata.modifierClasses]   - Button modifiers classes
 * @param {array}  [metadata.additionalClasses] - Button additional classes
 * @param {object} [metadata.attributes]        - Button attributes
 */

const ___ = (props: Props) => {
  const { prop1, prop2 } = props;

  const ___Class = cx(
    "o-button",
    props.metadata.contextClass,
    props.metadata.modifierClasses,
    props.metadata.additionalClasses,
    {
      "___--prop1": prop1
    }
  );

  return props.type === "button" ? (
    <button className={___Class} {...props.metadata.attributes}>
      {props.text | raw}
    </button>
  ) : (
    <a className={___Class} href={props.url} {...props.metadata.attributes}>
      {props.text | raw}
    </a>
  );
};

___.defaultProps = {
  prop1: 2
};

export { ___ };

/**
 * Social Button
 *
 * @param {string} url                          - Button URL
 * @param {string} iconPath                     - Button icon path
 * @param {string} text                         - Button text
 * @param {int}    [counter]                    - Button counter
 * @param {string} [metadata.contextClass]      - Button context class
 * @param {array}  [metadata.modifierClasses]   - Button modifiers classes
 * @param {array}  [metadata.additionalClasses] - Button additional classes
 * @param {object} [metadata.attributes]        - Button attributes
 */

const social = (props: Props) => {
  const { prop1, prop2 } = props;

  const ___Class = cx(
    "o-button",
    props.metadata.contextClass,
    props.metadata.modifierClasses,
    props.metadata.additionalClasses,
    {
      "___--prop1": prop1
    }
  );

  return (
    <a
      className={`${___Class} o-button--social`}
      href={props.url}
      target="_blank"
      rel="noopener"
      {...props.metadata.attributes}
    >
      <span className={"o-button__icon" | contextClass(contextClass)}>
        {props.iconPath | raw}
      </span>
      <span className={"o-button__text" | contextClass(contextClass)}>
        {props.text | raw}
      </span>
      {props.counter && (
        <span className={"o-button__counter" | contextClass(contextClass)}>
          {props.counter}
        </span>
      )}
    </a>
  );
};

___.defaultProps = {
  prop1: 2
};

export { ____2 };

/**
 * Social Button Badge
 *
 * @param {string} url                          - Button URL
 * @param {string} iconPath                     - Button icon path
 * @param {string} [metadata.contextClass]      - Button context class
 * @param {array}  [metadata.modifierClasses]   - Button modifiers classes
 * @param {array}  [metadata.additionalClasses] - Button additional classes
 * @param {object} [metadata.attributes]        - Button attributes
 */

const socialBadge = (props: Props) => {
  const { prop1, prop2 } = props;

  const ___Class = cx(
    "o-button",
    props.metadata.contextClass,
    props.metadata.modifierClasses,
    props.metadata.additionalClasses,
    {
      "___--prop1": prop1
    }
  );

  return (
    <a
      className={`${___Class} o-button--social o-button--social-badge`}
      href={props.url}
      target="_blank"
      rel="noopener"
      {...props.metadata.attributes}
    >
      <span className={"o-button__icon" | contextClass(contextClass)}>
        {props.iconPath | raw}
      </span>
    </a>
  );
};

___.defaultProps = {
  prop1: 2
};

export { ____3 };
