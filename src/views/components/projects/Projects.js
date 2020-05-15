// @flow

import * as React from "react";
import cx from "classnames";
import "./Projects.scss";
import { Details } from "views/objects";
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
      thumbnailSrc: string,
      achievements?: Array<string>,
      architecture?: Array<string>,
      libraries?: Array<string>,
    }
  ],
};

const Projects = ({ projects }: Props) => {
  const renderThumbnail = (project) => (
    <>
      <a href={project.url} className="c-project__link">
        <img
          className="c-project__thumbnail"
          src={project.thumbnailSrc}
          alt={project.name}
          loading="lazy"
        />
        <div href={project.url} className="c-project__overlay">
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
      {project.achievements && (
        <div className="c-project__details">
          <b className="c-project__details-heading">
            Key {pluralize("Achievement", project.achievements.length)}
          </b>
          <ul className="c-project__details-list">
            {project?.achievements?.map((detail) => (
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
            {pluralize("Library", project.libraries.length)}
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
              key={project.name + (project.tagline || "")}
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
              key={project.name + (project.tagline || "")}
            >
              <div className="c-project">
                {renderThumbnail(project)}
                {(project.achievements ||
                  project.architecture ||
                  project.libraries) && (
                  <Details summary="Details" variant="compact">
                    {renderContent(project)}
                  </Details>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
