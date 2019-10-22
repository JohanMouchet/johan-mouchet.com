// @flow

import * as React from "react";
import cx from "classnames";
import "./projects.scss";
import { ReactComponent as IconAward } from "../../../assets/images/icons/award.svg";

type Props = {
  projects: [
    {
      name: string,
      tagline?: string,
      url: string,
      lede: string,
      thumbnailPath: string,
      awards?: [
        {
          name: string,
          url: string,
          category: string
        }
      ],
      details?: Array<Node>
    }
  ]
};

const Projects = (props: Props) => {
  const { projects } = props;

  const projectQuantity = projects.length;
  const cellSize = projectQuantity <= 4 ? 12 / projectQuantity : 3;

  const renderThumbnail = project => (
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

  const renderContent = (project, singleProject = false) => (
    <>
      {project.lede && (
        <p
          className={cx("c-project__lede", {
            "u-vr--top-0-@xs": singleProject
          })}
        >
          {project.lede}
        </p>
      )}

      {project.awards && (
        <ul
          className={cx("c-project__awards", {
            "u-vr--top-0-@xs": singleProject
          })}
        >
          {project.awards.map(award => (
            <li className="c-project__award">
              <a className="c-project__award-icon" href={award.url}>
                <IconAward />
              </a>
              <span className="c-project__award-name">
                <em>{award.name}</em>
                {award.category && (":", award.category)}
              </span>
            </li>
          ))}
        </ul>
      )}

      {!project.details ? null : (
        <ul
          className={cx("c-project__details", {
            "u-vr--top-0-@xs": singleProject
          })}
        >
          {project.details.map(detail => (
            <li className="c-project__detail">{detail}</li>
          ))}
        </ul>
      )}
    </>
  );

  return !projects ? null : (
    <div className="c-projects">
      <div className="grid">
        {projects.map(project => (
          <div
            className={`cell cell--12-@xs cell--6-@sm cell--${cellSize}-@md`}
            key={project.name + (project.tagline && " - " + project.tagline)}
          >
            <div className="c-project">
              {projectQuantity > 1 ? (
                <>
                  {renderThumbnail(project)}
                  {renderContent(project)}
                </>
              ) : (
                <div className="grid">
                  <div className="cell cell--12-@xs cell--4-@md">
                    {renderThumbnail(project)}
                  </div>
                  <div className="cell cell--12-@xs cell--8-@md">
                    {renderContent(project, true)}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
