// @flow

import * as React from "react";
import cx from "classnames";
import "./Projects.scss";
import { ReactComponent as IconAward } from "assets/images/icons/award.svg";
import pluralize from "utils/pluralize";
import parse from "utils/parse";

type Props = {
  projects: [
    {
      highlight?: boolean,
      name: string,
      tagline?: string,
      url: string,
      lede: string,
      thumbnailPath: string,
      awards?: [
        {
          name: string,
          url: string,
          category: string,
        }
      ],
      features?: Array<string>,
      architecture?: Array<string>,
      libraries?: Array<string>,
    }
  ],
};

const Projects = ({ projects }: Props) => {
  const renderThumbnail = (project) => (
    <>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="c-project__link"
      >
        <img
          className="c-project__thumbnail"
          src={project.thumbnailPath}
          alt={project.name}
          loading="lazy"
        />
        <div
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="c-project__overlay"
        >
          <h4 className="c-project__title">{project.name}</h4>
          <span className="c-project__line"></span>
          {project.tagline && (
            <span className="c-project__tagline">{project.tagline}</span>
          )}
        </div>
      </a>

      {project.lede && <p className="c-project__lede">{parse(project.lede)}</p>}
    </>
  );

  const renderContent = (project) => (
    <>
      {project.awards && (
        <ul
          className={cx("c-project__awards", {
            "u-vr--top-0-@xs": project.highlight
          })}
        >
          {project.awards.map((award) => (
            <li className="c-project__award" key={award.name}>
              <a className="c-project__award-icon" href={award.url}>
                <IconAward />
              </a>
              <span className="c-project__award-name">
                <em>{award.name}</em>
                {award.category && ": " + award.category}
              </span>
            </li>
          ))}
        </ul>
      )}

      {project.features && (
        <div className="c-project__details">
          <b className="c-project__details-heading">
            Key {pluralize("Achievement", project.features.length)}
          </b>
          <ul className="c-project__details-list">
            {project.features.map((detail) => (
              <li className="c-project__detail" key={parse(detail)}>
                {parse(detail)}
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.architecture && (
        <div className="c-project__details">
          <b className="c-project__details-heading">Architecture</b>
          <p className="c-project__details-list">
            {parse(project.architecture.join(", "))}
          </p>
        </div>
      )}

      {project.libraries && (
        <div className="c-project__details">
          <b className="c-project__details-heading">
            {pluralize("Library", project.features.length)}
          </b>
          <p className="c-project__details-list">
            {parse(project.libraries.join(", "))}
          </p>
        </div>
      )}
    </>
  );

  return !projects ? null : (
    <div className="c-projects">
      <div className="grid">
        {projects.map((project) =>
          project.highlight ? (
            <div
              className="cell cell--12-@xs"
              key={project.name + project.tagline}
            >
              <div className="c-project c-project--highlighted">
                <div className="grid">
                  <div className="cell cell--12-@xs cell--6-@sm cell--4-@lg">
                    {renderThumbnail(project)}
                  </div>
                  <div className="cell cell--12-@xs cell--6-@sm cell--8-@lg">
                    {renderContent(project)}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className={cx("cell cell--12-@xs cell--6-@sm", {
                "cell--4-@lg": project.lede,
                "cell--3-@lg": !project.lede,
              })}
              key={project.name + project.tagline}
            >
              <div className="c-project">
                {renderThumbnail(project)}
                {renderContent(project)}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
