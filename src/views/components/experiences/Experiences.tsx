import { duration } from "@/utils/duration/duration";
import { Projects } from "@/views/components/projects/Projects";
import { IconArrowUpRight } from "@/views/objects/icons";
import { PrismicRichText } from "@prismicio/react";
import clsx, { ClassValue } from "clsx";
import styles from "./Experiences.module.scss";

export const Experiences = ({
  experiences,
  className,
  ...props
}: {
  experiences: {
    id?: string;
    companyLink: {
      url: string;
    };
    companyName: string;
    location: string;
    roles: {
      roles: {
        title: string;
        /** ISO string date */
        startDate: string;
        present?: boolean;
        /** ISO string date */
        endDate?: string;
        contractType?: "Full-time" | "Freelance" | "Contract";
      }[];
    };
    lede: React.ComponentProps<typeof PrismicRichText>["field"];
    projects?: React.ComponentProps<typeof Projects>;
  }[];
  className?: ClassValue;
} & React.HTMLProps<HTMLDivElement>) => {
  if (!experiences?.length) {
    return null;
  }

  return (
    <div className={clsx(styles["c-experiences"], className)} {...props}>
      {experiences.map((experience) => {
        const multipleRoles = experience.roles?.roles?.length > 1;
        const chronologicallyOrderedRoles = experience.roles?.roles.toSorted(
          (a, b) => Date.parse(a.startDate) - Date.parse(b.startDate)
        );
        const startDate = new Date(chronologicallyOrderedRoles?.[0].startDate);
        const endDate = chronologicallyOrderedRoles?.at(-1)?.endDate
          ? new Date(chronologicallyOrderedRoles?.at(-1)?.endDate as string)
          : new Date();
        const present = chronologicallyOrderedRoles?.at(-1)?.present;

        return (
          <section
            className={styles["c-experience"]}
            id={experience.id}
            key={experience.id || experience.companyName}
          >
            <h3 className={styles["c-experience__heading"]}>
              <span>
                <a
                  href={
                    experience.companyLink.url && experience.companyLink.url
                  }
                  target={experience.companyLink.url && "_blank"}
                  rel={experience.companyLink.url && "noopener noreferrer"}
                  className={styles["c-experience__company"]}
                >
                  {experience.companyName}
                  <IconArrowUpRight className={styles["c-experience__link"]} />
                </a>
                , {experience.location}
              </span>
              <div className={styles["c-experience__details"]}>
                <Dates
                  startDate={startDate}
                  present={present}
                  endDate={endDate}
                />
                {multipleRoles && (
                  <>
                    <span className={styles["c-experience__separator"]} />
                    <Duration
                      startDate={startDate}
                      present={present}
                      endDate={endDate}
                    />
                  </>
                )}
              </div>
            </h3>
            <div
              className={clsx(
                styles["c-experience__subheading"],
                multipleRoles &&
                  styles["c-experience__subheading--multiple-roles"]
              )}
            >
              {experience.roles &&
                experience.roles.roles.map((role) => {
                  const roleStartDate = new Date(role.startDate);
                  const roleEndDate = role.endDate
                    ? new Date(role.endDate)
                    : new Date();

                  return (
                    <div
                      className={styles["c-experience__details"]}
                      key={role.title}
                    >
                      <span className={styles["c-experience__title"]}>
                        {role.title}
                      </span>
                      {role.contractType &&
                        role.contractType !== "Full-time" && (
                          <>
                            <span
                              className={styles["c-experience__separator"]}
                            />
                            <span
                              className={styles["c-experience__contract-type"]}
                            >
                              {role.contractType}
                            </span>
                          </>
                        )}
                      <div className={styles["c-experience__push"]} />
                      <Duration
                        startDate={roleStartDate}
                        present={role.present}
                        endDate={roleEndDate}
                      />
                    </div>
                  );
                })}
            </div>
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

const Dates = ({
  startDate,
  present,
  endDate,
}: {
  startDate: Date;
  present?: React.ComponentProps<
    typeof Experiences
  >["experiences"][number]["roles"]["roles"][number]["present"];
  endDate?: Date;
}) => (
  <span className={styles["c-experience__date"]}>
    <time dateTime={startDate.toISOString().substring(0, 7)}>
      {`${startDate.toLocaleString("en-GB", {
        month: "short",
      })} ${startDate.getFullYear()}`}
    </time>
    {present
      ? " – Present"
      : endDate && (
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
  </span>
);

const Duration = ({
  startDate,
  present,
  endDate,
}: {
  startDate: Date;
  present?: React.ComponentProps<
    typeof Experiences
  >["experiences"][number]["roles"]["roles"][number]["present"];
  endDate?: Date;
}) => {
  if (!endDate && !present) {
    return null;
  }

  return (
    <span className={styles["c-experience__duration"]}>
      {duration(
        [{ start: startDate, end: endDate || new Date() }],
        "short",
        "1 month"
      )}
    </span>
  );
};
