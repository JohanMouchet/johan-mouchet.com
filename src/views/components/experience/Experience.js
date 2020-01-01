// @flow

import * as React from "react";
import { formatDistance } from "date-fns";
import "./Experience.scss";
import { Projects } from "views/components";

type Props = {
  experiences: [
    {
      company: {
        url: string,
        name: string
      },
      location: string,
      jobTitle: Node,
      startDate: string,
      endDate: string,
      lede: Node,
      projects: Projects
    }
  ]
};

const Experience = (props: Props) => {
  const { experiences } = props;

  const today = new Date();

  return !experiences
    ? null
    : experiences.map(experience => (
        <section
          className="c-experience"
          key={experience.company.name + " - " + experience.startDate}
        >
          <h3 className="c-experience__heading">
            <a
              href={experience.company.url && experience.company.url}
              target={experience.company.url && "_blank"}
              rel={experience.company.url && "noopener noreferrer"}
              className="c-experience__company external-link"
            >
              {experience.company.name}
            </a>
            , {experience.location} ⁠— {experience.jobTitle}
          </h3>

          <p className="c-experience__subheading">
            <span className="c-experience__date">
              {experience.startDate.getFullYear()}

              {experience.endDate.toDateString() === today.toDateString()
                ? " – Present"
                : experience.endDate.getFullYear() >
                    experience.startDate.getFullYear() &&
                  " – " + experience.endDate.getFullYear()}
              {/* TODO: Year and month */}
            </span>{" "}
            <span className="c-experience__duration">
              (
              {formatDistance(experience.startDate, experience.endDate, {
                addSuffix: false
              })}
              )
            </span>
            {experience.contractType && (
              <span className="c-experience__type">
                {" "}
                / {experience.contractType}
              </span>
            )}
          </p>

          <p className="c-experience__lede">{experience.lede}</p>

          {experience.projects && <Projects projects={experience.projects} />}
        </section>
      ));
};

export default Experience;
