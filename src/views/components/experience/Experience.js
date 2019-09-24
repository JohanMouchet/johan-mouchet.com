// @flow

import * as React from "react";
import cx from "classnames";
import "./___.scss";

/**
 * Experiences
 *
 * @param {array}  experiences     - List of experiences
 * @param {string} company[0].URL  - Experience company URL
 * @param {string} company[0].name - Experience company name
 * @param {string} location        - Experience location
 * @param {string} jobTitle        - Experience job title
 * @param {string} startDate       - Experience start date, dd/mm/yyyy format
 * @param {string} endDate         - Experience end date, dd/mm/yyyy format or "Present"
 * @param {string} lede            - Experience lede
 * @param {array}  [projects]      - Experience projects
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
	{% import "components/c-projects.html" as projects %}

	{% for experience in props.experiences %}
		<section className="c-experience">
			<h3 className="c-experience__heading">
				<a {% if experience.company.URL %}href={experience.company.URL} target="_blank" className="c-experience__company external-link"{% endif %}>{ experience.company.name }</a>,
				{ experience.location } &mdash;
				{ experience.jobTitle|raw }
			</h3>

			<p className="c-experience__subheading">
				<span className="c-experience__date">{ experience.startDate|date("Y") }

				{% if experience.endDate == "Present" %}
					&ndash; Present</span>
				{% else %}
					{% if experience.startDate|date("Y") != experience.endDate|date("Y") %}
						&ndash; { experience.endDate|date("Y") }</span>
					{% endif %}

					<span className="c-experience__duration">
						{% set difference = date(experience.endDate|date("d/m/Y")).diff(date(experience.startDate|date("d/m/Y"))) %}

						{% set yearDuration = "" %}
						{% if difference.y == 1 %}
							{% set yearDuration = "1 year" %}
						{% elseif difference.y > 1 %}
							{% set yearDuration = difference.y ~ " years" %}
						{% endif %}

						{% set monthDuration = "" %}
						{% if difference.m == 1 %}
							{% set monthDuration = "1 month" %}
						{% elseif difference.m > 1 %}
							{% set monthDuration = difference.m ~ " months" %}
						{% endif %}

						({ yearDuration }{ yearDuration and monthDuration ? " " }{ monthDuration })
					</span>
				{% endif %}

				{% if experience.contractType %}
					/ <span className="c-experience__type">{ experience.contractType }</span>
				{% endif %}
			</p>

			<p className="c-experience__lede">
				{ experience.lede|raw }
			</p>

			{% if experience.projects %}
				{ projects.default(
					experience.projects
				) }
			{% endif %}
		</section>
	{% endfor %}
  );
};

___.defaultProps = {
  prop1: 2
};

export default ___;
