import { duration } from "@/utils/duration/duration";
import { Projects } from "@/views/components/projects/Projects";
import { PrismicRichText } from "@prismicio/react";
import clsx, { ClassValue } from "clsx";
import styles from "./Experiences.module.scss";

export const Experiences = ({
  experiences,
  className,
  ...props
}: {
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
    lede: React.ComponentProps<typeof PrismicRichText>["field"];
    projects?: React.ComponentProps<typeof Projects>;
  }>;
  className?: ClassValue;
} & React.HTMLProps<HTMLDivElement>) => {
  if (!experiences?.length) {
    return null;
  }

  return (
    <div className={clsx(styles["c-experiences"], className)} {...props}>
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
            className={styles["c-experience"]}
            key={`${experience.companyName}-${startDate}`}
          >
            <h3 className={styles["c-experience__heading"]}>
              <a
                href={experience.companyLink.url && experience.companyLink.url}
                target={experience.companyLink.url && "_blank"}
                rel={experience.companyLink.url && "noopener noreferrer"}
                className={styles["c-experience__company"]}
              >
                {experience.companyName}
              </a>
              , {experience.location} ⁠— {experience.jobTitle}
            </h3>
            <p className={styles["c-experience__subheading"]}>
              <span className={styles["c-experience__date"]}>
                <time dateTime={startDate.toISOString().substring(0, 7)}>
                  {`${startDate.toLocaleString("en-GB", {
                    month: "short",
                  })} ${startDate.getFullYear()}`}
                </time>

                {experience.present ? (
                  " – Present"
                ) : (
                  <>
                    {" "}
                    –{" "}
                    <time dateTime={endDate.toISOString().substring(0, 7)}>
                      {`${endDate.toLocaleString("en-GB", {
                        month: "short",
                      })} ${endDate.getFullYear()}`}
                    </time>
                  </>
                )}
              </span>{" "}
              <span className={styles["c-experience__duration"]}>
                (
                <time dateTime={duration(startDate, endDate, "iso8601", "1M")}>
                  {duration(startDate, endDate, "short", "1 mo")}
                </time>
                )
              </span>
              {experience.contractType && (
                <span className={styles["c-experience__type"]}>
                  {" "}
                  / {experience.contractType}
                </span>
              )}
            </p>
            <div className={styles["c-experience__lede"]}>
              <PrismicRichText field={experience.lede} />
            </div>
            {experience.projects?.projects && (
              <Projects projects={experience.projects.projects} />
            )}
          </section>
        );
      })}
    </div>
  );
};
