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
  );

  const renderContent = (project, highlighted) => (
    <>
      {project.lede && (
        <p className={cx("c-project__lede", highlighted && "u-vr--top-0-@xs")}>
          {parse(project.lede)}
        </p>
      )}

      {project.awards && (
        <ul
          className={cx("c-project__awards", highlighted && "u-vr--top-0-@xs")}
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

      {(project.features || project.architecture || project.libraries) && (
        <ul
          className={cx(
            "c-project__details",
            highlighted && !project.awards && "u-vr--top-0-@xs"
          )}
        >
          {project.features && [
            <li className="c-project__details-section" key="features">
              <span className="c-project__details-heading">
                {pluralize("Feature", project.features.length)}
              </span>
              <ul className="c-project__detail-list">
                {project.features.map((detail) => (
                  <li className="c-project__detail" key={parse(detail)}>
                    {parse(detail)}
                  </li>
                ))}
              </ul>
            </li>,
          ]}

          {project.architecture && [
            <li className="c-project__details-section" key="architecture">
              <span className="c-project__details-heading">Architecture</span>
              <ul className="c-project__detail-list">
                {project.architecture.map((detail) => (
                  <li className="c-project__detail" key={parse(detail)}>
                    {parse(detail)}
                  </li>
                ))}
              </ul>
            </li>,
          ]}

          {project.libraries && [
            <li className="c-project__details-section" key="libraries">
              <span className="c-project__details-heading">
                {pluralize("Library", project.features.length)}
              </span>
              <ul className="c-project__detail-list">
                {project.libraries.map((detail) => (
                  <li className="c-project__detail" key={parse(detail)}>
                    {parse(detail)}
                  </li>
                ))}
              </ul>
            </li>,
          ]}
        </ul>
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
              <div className="c-project c-project--single">
                <div className="grid">
                  <div className="cell cell--12-@xs cell--6-@sm cell--4-@lg">
                    {renderThumbnail(project)}
                  </div>
                  <div className="cell cell--12-@xs cell--6-@sm cell--8-@lg">
                    {renderContent(project, true)}
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
