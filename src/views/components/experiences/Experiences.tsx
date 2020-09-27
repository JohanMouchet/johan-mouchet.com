import React from "react";
import { RichText, RichTextBlock } from "prismic-reactjs";
import { duration } from "utils/duration";
import { Projects } from "views/components";
import "./Experiences.scss";

type Props = {
  experiences: Array<{
    companyLink: {
      url: string;
    };
    companyName: string;
    location: string;
    jobTitle: string;
    startDate: Date | string;
    present: boolean;
    endDate: Date | string;
    contractType?: string;
    lede: RichTextBlock[];
    projects?: React.ComponentProps<typeof Projects>;
  }>;
};

const Experiences: React.FC<Props> = ({ experiences }) =>
  !experiences?.length ? null : (
    <div className="c-experiences">
      {experiences.map((experience) => {
        const startDate =
          typeof experience.startDate === "string"
            ? new Date(experience.startDate)
            : experience.startDate;
        const endDate = experience.present
          ? new Date()
          : typeof experience.endDate === "string"
          ? new Date(experience.endDate)
          : experience.endDate;

        return (
          <section
            className="c-experience"
            key={experience.companyName + " - " + startDate}
          >
            <h3 className="c-experience__heading">
              <a
                href={experience.companyLink.url && experience.companyLink.url}
                target={experience.companyLink.url && "_blank"}
                rel={experience.companyLink.url && "noopener noreferrer"}
                className="c-experience__company"
              >
                {experience.companyName}
              </a>
              , {experience.location} ⁠— {experience.jobTitle}
            </h3>
            <p className="c-experience__subheading">
              <span className="c-experience__date">
                {`${startDate.toLocaleString("en-GB", {
                  month: "short",
                })} ${startDate.getFullYear()}`}

                {experience.present
                  ? " – Present"
                  : [
                      (endDate.getFullYear() > startDate.getFullYear() ||
                        endDate.getMonth() > startDate.getMonth()) &&
                        ` – ${endDate.toLocaleString("en-GB", {
                          month: "short",
                        })}`,
                      endDate.getFullYear() > startDate.getFullYear() &&
                        ` ${endDate.getFullYear()}`,
                    ]}
              </span>
              <span className="c-experience__duration">
                {" "}
                ({duration(startDate, endDate, "1 mo")})
              </span>
              {experience.contractType && (
                <span className="c-experience__type">
                  {" "}
                  / {experience.contractType}
                </span>
              )}
            </p>
            <div className="c-experience__lede">
              <RichText render={experience.lede} />
            </div>
            {experience.projects?.projects && (
              <Projects projects={experience.projects.projects} />
            )}
          </section>
        );
      })}
    </div>
  );

export default Experiences;
