// @flow

import * as React from "react";
import { differenceInCalendarMonths } from "date-fns";
import "./Experience.scss";
import { Projects } from "views/components";

type Props = {
  experiences: [
    {
      company: {
        url: string,
        name: string,
      },
      location: string,
      jobTitle: Node,
      startDate: string,
      endDate: string,
      lede: Node,
      projects: Projects,
    }
  ],
};

const Experience = ({ experiences }: Props) => {
  const today = new Date();

  const duration = (endDate, startDate) => {
    const durationInMonths = differenceInCalendarMonths(endDate, startDate);
    const years = Math.floor(durationInMonths / 12);
    const months = durationInMonths % 12;
    const yearsFormated =
      years >= 1 ? `${years} ${years >= 2 ? " yrs" : " yr"}` : "";
    const monthsFormated =
      months >= 1 ? `${months} ${months >= 2 ? " mos" : " mo"}` : "";

    const monthsFormatedMin =
      !yearsFormated && !monthsFormated ? "1 mo" : monthsFormated;

    return (
      yearsFormated +
      (yearsFormated && monthsFormatedMin && " ") +
      monthsFormatedMin
    );
  };

  return !experiences
    ? null
    : experiences.map((experience) => (
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
              {`${experience.startDate.toLocaleString("en-GB", {
                month: "short",
              })} ${experience.startDate.getFullYear()}`}

              {experience.endDate.toDateString() === today.toDateString()
                ? " – Present"
                : [
                    (experience.endDate.getFullYear() >
                      experience.startDate.getFullYear() ||
                      experience.endDate.getMonth() >
                        experience.startDate.getMonth()) &&
                      ` –  ${experience.endDate.toLocaleString("en-GB", {
                        month: "short",
                      })}`,
                    experience.endDate.getFullYear() >
                      experience.startDate.getFullYear() &&
                      ` ${experience.endDate.getFullYear()}`,
                  ]}
            </span>
            <span className="c-experience__duration">
              {" "}
              ({duration(experience.endDate, experience.startDate)})
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
