import React from "react";
import {
  Elements,
  RichText,
  RichTextBlock,
  RichTextSpan,
} from "prismic-reactjs";
import { parse } from "utils/parse";
import "./OpenSource.scss";

type Props = {
  projects: {
    link: {
      url: string;
    };
    name: string;
    lede: RichTextBlock[];
    description: {
      type: Elements.paragraph | Elements.preformatted;
      text: string;
      spans: RichTextSpan[];
    }[];
  }[];
};

const OpenSource: React.FC<Props> = ({ projects }) =>
  !projects?.length ? null : (
    <div className="c-open-sources">
      <div className="grid">
        {projects.map((project) => {
          const descriptionPreformatted =
            project.description[0].type === Elements.preformatted;

          return (
            <div
              className="cell cell--12-@xs cell--6-@sm cell--4-@lg"
              key={project.name}
            >
              <h3 className="c-open-source__title">
                <a
                  href={project.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>
              </h3>

              <div className="c-open-source__lede">
                <RichText render={project.lede} />
              </div>

              <div className="c-open-source__description">
                {descriptionPreformatted ? (
                  parse(project.description[0].text)
                ) : (
                  <RichText render={project.description} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

export default OpenSource;
