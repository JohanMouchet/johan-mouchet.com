// @flow

import * as React from "react";
import cx from "classnames";
import "./___.scss";

/**
 * Academic Qualifications
 *
 * @param {array}  qualifications 		                 - List of qualifications
 * @param {string} qualifications[0].establishment.name - Qualification establishment name
 * @param {string} qualifications[0].establishment.URL  - Qualification establishment URL
 * @param {string} qualifications[0].location           - Qualification location
 * @param {int}    qualifications[0].graduationYear     - Qualification graduationYear
 * @param {string} qualifications[0].title              - Qualification title
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
	{% for qualification in props.qualifications %}
		<section className="c-academic-qualification">
			<h3 className="c-academic-qualification__heading">
				<a className="c-academic-qualification__establishment" href="{ qualification.establishment.URL }">{ qualification.establishment.name }</a>, { qualification.location }
			</h3>
			<span className="c-academic-qualification__graduation-year">{ qualification.graduationYear }</span>
			<p className="c-academic-qualification__title">{ qualification.title }</p>
		</section>
	{% endfor %}
  );
};

___.defaultProps = {
  prop1: 2
};

export default ___;
