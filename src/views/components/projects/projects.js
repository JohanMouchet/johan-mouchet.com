// @flow

import * as React from "react";
import cx from "classnames";
import "./___.scss";

/**
 * Projects
 *
 * @param {array}  projects                 - List of project
 * @param {string} project[0].name          - project name
 * @param {string} [project[0].tagline]     - project tagline
 * @param {string} project[0].URL           - project URL
 * @param {string} [project[0].lede ]       - project lede
 * @param {string} project[0].thumbnailPath - project thumbnail path
 * @param {array}  [project[0].details]     - project details
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
	<div className="c-projects">
		<div className="grid">
			{% set projectQuantity = options|length %}
			{% set cellSize = projectQuantity < 5 ? 12 / projectQuantity : 3 %}

			{% for project in options %}
				<div className="cell cell--12-@xs cell--6-@sm cell--{ cellSize }-@md">
					<div className="c-project">
						{% if projectQuantity == 1 %}
						<div className="grid">
							<div className="cell cell--12-@xs cell--4-@md">
						{% endif %}
								<a href={project.URL} target="_blank"  className="c-project__link">
									<img className="c-project__thumbnail" src={project.thumbnailPath} alt={project.name}>
									<div href={project.URL} target="_blank"  className="c-project__overlay">
										<h4 className="c-project__title">{ project.name }</h4>
										<span className="c-project__line"></span>
										{% if project.tagline %}
											<span className="c-project__tagline">{ project.tagline }</span>
										{% endif %}
									</div>
								</a>
						{% if projectQuantity == 1 %}
							</div>
							<div className="cell cell--12-@xs cell--8-@md">
						{% endif %}
								{% if project.lede %}
									<p className="c-project__lede { projectQuantity == 1 ? 'u-vr--top-0-@md'}">
										{ project.lede|raw }
									</p>
								{% endif %}

								{% if project.awards %}
									<ul className="c-project__awards { projectQuantity == 1 ? 'u-vr--top-0-@md'}">
										{% for award in project.awards %}
											<li className="c-project__award">
												<a className="c-project__award-icon" href={award.URL}>{ file_get_contents(_GLOBAL.paths.img ~ "icons/award.svg")|raw }</a>
												<span className="c-project__award-name"><em>{ award.name }{% if award.category %}</em>: { award.category }{% endif %}</span>
											</li>
										{% endfor %}
									</ul>
								{% endif %}

								{% if project.details %}
									<ul className="c-project__details { projectQuantity == 1 ? 'u-vr--top-0-@md'}">
										{% for detail in project.details %}
											<li className="c-project__detail">{ detail|raw }</li>
										{% endfor %}
									</ul>
								{% endif %}
						{% if projectQuantity == 1 %}
							</div>
						</div>
					{% endif %}
					</div>
				</div>
			{% endfor %}
		</div>
	</div>
  );
};

___.defaultProps = {
  prop1: 2
};

export default ___;
