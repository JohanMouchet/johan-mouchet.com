// @flow

import * as React from "react";
import cx from "classnames";
import "./___.scss";

/**
 * Progress bar
 *
 * @param {string} [label]                      - Progress bar label
 * @param {string} [total]                      - Progress bar total
 * @param {int}    filling                      - Progress bar filling percent
 * @param {string} [tooltip]                    - Progress bar tooltip
 * @param {string} [metadata.contextClass]      - Progress bar context class
 * @param {array}  [metadata.additionalClasses] - Progress bar additional classes
 * @param {array}  [metadata.modifierClasses]   - Progress bar modifiers classes
 * @param {object} [metadata.attributes]        - Progress bar attributes
 */

const ___ = (props: Props) => {
  const {
    prop1,
    prop2
  } = props;

  const ___Class = cx(
	"o-progress-bar",
	props.metadata.contextClass,
	props.metadata.modifierClasses,
	props.metadata.additionalClasses,
    {
      prop1: "___--prop1"
    }
  );

  return (
	<div className="___Class">
		{% if props.label %}
			<span className="{ 'o-progress-bar__label'|contextClass(contextClass) }">{ props.label|raw }</span>
		{% endif %}
		{% if props.total %}
			<span className="{ 'o-progress-bar__total'|contextClass(contextClass) }">{ props.total|raw }</span>
		{% endif %}
		<div className="{ 'o-progress-bar__container'|contextClass(contextClass) }">
			<div className="{ 'o-progress-bar__filling'|contextClass(contextClass) } wow" style="width: { props.filling }%" {% if props.tooltip %}data-progress-bar-tooltip="{ props.tooltip|raw }"{% endif %}></div>
		</div>
	</div>
  );
};

___.defaultProps = {
  prop1: 2
};

export default ___;
