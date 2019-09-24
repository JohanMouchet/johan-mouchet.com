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
  const {
    prop1,
    prop2
  } = props;

  const ___Class = cx(
    "___",
    {
      prop1: "___--prop1"
    }
  );

  return (
	{% set contextClass = options.metadata.contextClass %}
	{% set modifierClasses = options.metadata.modifierClasses %}
	{% set additionalClasses = options.metadata.additionalClasses %}
	{% set attributes = options.metadata.attributes %}

	{% if options.type == 'button' %}
		<button className="{ contextClass } o-button { 'o-button'|modifierClasses(modifierClasses) } { additionalClasses|additionalClasses }" { attributes|attributes|raw }>{ options.text|raw }</button>
	{% else %}
		<a className="{ contextClass } o-button { 'o-button'|modifierClasses(modifierClasses) } { additionalClasses|additionalClasses }" href="{ options.url }" { attributes|attributes|raw }>{ options.text|raw }</a>
	{% endif %}
  );
};

___.defaultProps = {
  prop1: 2
};

export {___};

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
	const {
	  prop1,
	  prop2
	} = props;
  
	const ___Class = cx(
	  "___",
	  {
		prop1: "___--prop1"
	  }
	);
  
	return (
	{% set contextClass = options.metadata.contextClass %}
	{% set modifierClasses = options.metadata.modifierClasses %}
	{% set additionalClasses = options.metadata.additionalClasses %}
	{% set attributes = options.metadata.attributes %}

	<a className="{ contextClass } o-button { 'o-button'|modifierClasses(modifierClasses) } o-button--social { additionalClasses|additionalClasses }" href="{ options.url }" target="_blank" rel="noopener" { attributes|attributes|raw }>
		<span className="{ 'o-button__icon'|contextClass(contextClass) }">{ options.iconPath|raw }</span>
		<span className="{ 'o-button__text'|contextClass(contextClass) }">{ options.text|raw }</span>
		{% if options.counter %}
			<span className="{ 'o-button__counter'|contextClass(contextClass) }">{ options.counter }</span>
		{% endif %}
	</a>
  );
};

___.defaultProps = {
  prop1: 2
};

export {___};

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
	const {
	  prop1,
	  prop2
	} = props;
  
	const ___Class = cx(
	  "___",
	  {
		prop1: "___--prop1"
	  }
	);
  
	return (
	{% set contextClass = options.metadata.contextClass %}
	{% set modifierClasses = options.metadata.modifierClasses %}
	{% set additionalClasses = options.metadata.additionalClasses %}
	{% set attributes = options.metadata.attributes %}

	<a className="{ contextClass } o-button { 'o-button'|modifierClasses(modifierClasses) } o-button--social o-button--social-badge { additionalClasses|additionalClasses }" href="{ options.url }" target="_blank" rel="noopener" { attributes|attributes|raw }>
		<span className="{ 'o-button__icon'|contextClass(contextClass) }">{ options.iconPath|raw }</span>
	</a>
  );
};

___.defaultProps = {
  prop1: 2
};

export {___};
