import * as React from "react";
import cx from "classnames";
import "./Projects.scss";
import { Details } from "views/objects";
import pluralize from "utils/pluralize";
import parse from "utils/parse";

type Thumbnail = {
  name: string;
  tagline?: string;
  url: string;
  lede: string;
  thumbnailSrc: string;
};

type Content = {
  highlight?: boolean;
  achievements?: string[];
  architecture?: string[];
  libraries?: string[];
};

type Props = {
  projects: (Thumbnail & Content)[];
};

const Projects: React.FC<Props> = ({ projects }) => {
  const renderThumbnail = (project: Thumbnail) => (
    <>
      <a href={project.url} className="c-project__link">
        <img
          className="c-project__thumbnail"
          src={project.thumbnailSrc}
          alt={project.name}
          loading="lazy"
        />
        <a href={project.url} className="c-project__overlay">
          <h4 className="c-project__title">{project.name}</h4>
          <span className="c-project__line"></span>
          {project.tagline && (
            <span className="c-project__tagline">{project.tagline}</span>
          )}
        </a>
      </a>

      {project.lede && <p className="c-project__lede">{parse(project.lede)}</p>}
    </>
  );

  const renderContent = (project: Content) => (
    <>
      {project.achievements && (
        <div className="c-project__detail">
          <b className="c-project__detail-heading">
            Key {pluralize("Achievement", project.achievements.length)}
          </b>
          <ul className="c-project__detail-list">
            {project.achievements.map((detail) => (
              <li key={String(parse(detail))}>{parse(detail)}</li>
            ))}
          </ul>
        </div>
      )}

      {project.architecture && (
        <div className="c-project__detail">
          <b className="c-project__detail-heading">Architecture</b>
          <p className="c-project__detail-list">
            {parse(project.architecture.join(", "))}
          </p>
        </div>
      )}

      {project.libraries && (
        <div className="c-project__detail">
          <b className="c-project__detail-heading">
            {pluralize("Library", project.libraries.length)}
          </b>
          <p className="c-project__detail-list">
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
                    <div className="c-project__details">
                      {renderContent(project)}
                    </div>
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
