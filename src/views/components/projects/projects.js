// @flow

import * as React from "react";
import "./projects.scss";

type Props = {
  projects: Array<mixed>,
  project[0].name: string,
  project[0].tagline: ?string,
  project[0].URL: string,
  project[0].lede: string,
  project[0].thumbnailPath: string,
  project[0].details: ?array,
};

const Projects = (props: Props) => {
  const {
    prop1,
    prop2
  } = props;

  return (
	<div className="c-projects">
		<div className="grid">
			{% set projectQuantity = props|length %}
			{% set cellSize = projectQuantity < 5 ? 12 / projectQuantity : 3 %}

			{props.map(project => (
				<div className="cell cell--12-@xs cell--6-@sm cell--{ cellSize }-@md">
					<div className="c-project">
						{% if projectQuantity === 1 %}
						<div className="grid">
							<div className="cell cell--12-@xs cell--4-@md">
						{% endif %}
								<a href={project.URL} target="_blank"  className="c-project__link">
									<img className="c-project__thumbnail" src={project.thumbnailPath} alt={project.name}>
									<div href={project.URL} target="_blank"  className="c-project__overlay">
										<h4 className="c-project__title">{ project.name }</h4>
										<span className="c-project__line"></span>
										{project.tagline && <span className="c-project__tagline">{ project.tagline }</span>}
									</div>
								</a>
						{% if projectQuantity === 1 %}
							</div>
							<div className="cell cell--12-@xs cell--8-@md">
						{% endif %}
								{project.lede && <p className="c-project__lede { projectQuantity === 1 ? 'u-vr--top-0-@md'}">
										{ project.lede|raw }
									</p>
								}

								{project.awards && (
									<ul className="c-project__awards { projectQuantity === 1 ? 'u-vr--top-0-@md'}">
										{props.awards.map(award => (
											<li className="c-project__award">
												<a className="c-project__award-icon" href={award.URL}>{ file_get_contents(_GLOBAL.paths.img + "icons/award.svg")|raw }</a>
												<span className="c-project__award-name"><em>{ award.name }</em>{award.category && (":", award.category)}</span>
											</li>
										))}
									</ul>)}

								{project.details && (
									<ul className="c-project__details { projectQuantity === 1 ? 'u-vr--top-0-@md'}">
										{project.details.map(detail => (
											<li className="c-project__detail">{ detail|raw }</li>
										))}
									</ul>)
								}
						{% if projectQuantity === 1 %}
							</div>
						</div>
					{% endif %}
					</div>
				</div>
			))}
		</div>
	</div>
  );
};

Projects.defaultProps = {
  prop1: 2
};

export default Projects;
