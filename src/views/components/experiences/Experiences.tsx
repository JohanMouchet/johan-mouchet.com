import * as React from "react";
import duration from "utils/duration";
import parse from "utils/parse";
import { Projects } from "views/components";
import "./Experiences.scss";

type Props = {
  experiences: Array<{
    company: {
      url: string;
      name: string;
    };
    location: string;
    jobTitle: string;
    startDate: Date;
    endDate: Date;
    contractType?: string;
    lede: string;
    // TODO: projects should be of type Projects
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    projects: any[];
  }>;
};

const Experiences: React.FC<Props> = ({ experiences }) =>
  !experiences ? null : (
    <div className="c-experiences">
      {experiences.map((experience) => (
        <section
          className="c-experience"
          key={experience.company.name + " - " + experience.startDate}
        >
          <h3 className="c-experience__heading">
            <a
              href={experience.company.url && experience.company.url}
              target={experience.company.url && "_blank"}
              rel={experience.company.url && "noopener noreferrer"}
              className="c-experience__company"
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

              {experience.endDate.toDateString() === new Date().toDateString()
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
              ({duration(experience.startDate, experience.endDate, "1 mo")})
            </span>
            {experience.contractType && (
              <span className="c-experience__type">
                {" "}
                / {experience.contractType}
              </span>
            )}
          </p>
          <p className="c-experience__lede">{parse(experience.lede)}</p>
          {experience.projects && <Projects projects={experience.projects} />}
        </section>
      ))}
    </div>
  );

export default Experiences;
