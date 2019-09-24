// @flow

import * as React from "react";
import cx from "classnames";
import "./___.scss";

/**
 * Expertises
 *
 * @param {array}  expertises 		      - List of expertise
 * @param {string} expertises[0].label   - Expertise label
 * @param {int}    expertises[0].filling - Expertise filling
 * @param {int}    expertises[0].tooltip - Expertise tooltip
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
	{% import "objects/o-progress-bar.html" as progressBar %}

	<ul className="c-expertises o-list--unstyled">
		{% for expertise in props.expertises %}
			<li className="c-expertise">
				{ progressBar.default({
					label: expertise.label,
					filling: expertise.filling,
					tooltip: expertise.tooltip,
					metadata: {
						modifierClasses: [
							"tooltip-hover"
						]
					}
				}) }
			</li>
		{% endfor %}
	</ul>
  );
};

___.defaultProps = {
  prop1: 2
};

export default ___;
