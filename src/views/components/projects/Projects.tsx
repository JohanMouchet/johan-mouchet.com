import React from "react";
import cx from "classnames";
import {
  Elements,
  RichText,
  RichTextBlock,
  RichTextSpan,
} from "prismic-reactjs";
import { parse } from "utils/parse";
import { pluralize } from "utils/pluralize";
import { Details } from "views/objects";
import "./Projects.scss";

type Thumbnail = {
  name: string;
  tagline?: string;
  link: {
    url: string;
  };
  lede: RichTextBlock[];
  thumbnailSrc: {
    url: string;
  };
};

type Content = {
  highlight?: boolean;
  achievements?: {
    type: Elements.paragraph | Elements.preformatted;
    text: string;
    spans: RichTextSpan[];
  }[];
  architecture?: RichTextBlock[];
  libraries?: RichTextBlock[];
};

type Props = {
  projects: (Thumbnail & Content)[];
};

const Projects: React.FC<Props> = ({ projects }) => {
  const renderThumbnail = (project: Thumbnail) => (
    <>
      <a href={project.link.url} className="c-project__link">
        <img
          className="c-project__thumbnail"
          src={project.thumbnailSrc.url}
          alt={project.name}
          loading="lazy"
        />
        <div className="c-project__overlay">
          <h4 className="c-project__title">{project.name}</h4>
          <span className="c-project__line"></span>
          {project.tagline && (
            <span className="c-project__tagline">{project.tagline}</span>
          )}
        </div>
      </a>

      {project.lede && (
        <div className="c-project__lede">
          <RichText render={project.lede} />
        </div>
      )}
    </>
  );

  const renderContent = (project: Content) => {
    const achievementPreformatted =
      project.achievements?.[0].type === Elements.preformatted;
    const achievementQuantity = achievementPreformatted
      ? project.achievements?.[0].text.match(/<li>/g)?.length
      : project.achievements?.length;

    return (
      <>
        {project.achievements && (
          <div className="c-project__detail">
            <b className="c-project__detail-heading">
              Key {pluralize("Achievement", achievementQuantity || 0)}
            </b>

            {achievementPreformatted ? (
              <ul className="c-project__detail-list">
                {parse(project.achievements[0].text)}
              </ul>
            ) : (
              <div className="c-project__detail-list">
                <RichText render={project.achievements} />
              </div>
            )}
          </div>
        )}

        {project.architecture && (
          <div className="c-project__detail">
            <b className="c-project__detail-heading">Architecture</b>
            <div className="c-project__detail-list">
              <RichText render={project.architecture} />
            </div>
          </div>
        )}

        {project.libraries && (
          <div className="c-project__detail">
            <b className="c-project__detail-heading">
              {pluralize(
                "Library",
                project.libraries[0].text.split(", ").length
              )}
            </b>
            <div className="c-project__detail-list">
              <RichText render={project.libraries} />
            </div>
          </div>
        )}
      </>
    );
  };

  return !projects?.length ? null : (
    <div className="c-projects">
      <div className="grid">
        {projects.map((project) =>
          project.highlight ? (
            <div
              className="cell cell--12-@xs"
              key={`${project.name}${project.tagline || ""}`}
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
              key={`${project.name}${project.tagline || ""}`}
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
