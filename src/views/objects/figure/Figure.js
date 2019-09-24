// @flow

import * as React from "react";
import cx from "classnames";
import "./___.scss";

/**
 * Figure
 *
 * @param {string} src                          - Figure image source
 * @param {string} [alt]                        - Figure image alt
 * @param {string} [title]                      - Figure image title
 * @param {string} [metadata.contextClass]      - Figure context class
 * @param {array}  [metadata.modifierClasses]   - Figure modifiers classes
 * @param {array}  [metadata.additionalClasses] - Figure additional classes
 * @param {object} [metadata.attributes]        - Figure attributes
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
	{% set contextClass = props.metadata.contextClass %}
	{% set modifierClasses = props.metadata.modifierClasses %}
	{% set additionalClasses = props.metadata.additionalClasses %}
	{% set attributes = props.metadata.attributes %}

	<figure className="{ contextClass } o-figure { 'o-figure'|modifierClasses(modifierClasses) } { additionalClasses|additionalClasses }">
		<img className="{ 'o-figure__img'|contextClass(contextClass) }" src="{ props.src }" {% if props.alt %}alt="{ props.alt }"{% endif %} {% if props.title %}title="{ props.title }"{% endif %} { props.metadata.attributes|attributes|raw }>
		{% if props.caption %}
			<figcaption className="{ 'o-figure__caption'|contextClass(contextClass) }">{ props.caption|raw }</figcaption>
		{% endif %}
	</figure>
  );
};

___.defaultProps = {
  prop1: 2
};

export default ___;
