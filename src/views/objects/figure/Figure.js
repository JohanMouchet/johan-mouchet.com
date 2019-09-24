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
	{% set contextClass = options.metadata.contextClass %}
	{% set modifierClasses = options.metadata.modifierClasses %}
	{% set additionalClasses = options.metadata.additionalClasses %}
	{% set attributes = options.metadata.attributes %}

	<figure className="{ contextClass } o-figure { 'o-figure'|modifierClasses(modifierClasses) } { additionalClasses|additionalClasses }">
		<img className="{ 'o-figure__img'|contextClass(contextClass) }" src="{ options.src }" {% if options.alt %}alt="{ options.alt }"{% endif %} {% if options.title %}title="{ options.title }"{% endif %} { options.metadata.attributes|attributes|raw }>
		{% if options.caption %}
			<figcaption className="{ 'o-figure__caption'|contextClass(contextClass) }">{ options.caption|raw }</figcaption>
		{% endif %}
	</figure>
  );
};

___.defaultProps = {
  prop1: 2
};

export default ___;
