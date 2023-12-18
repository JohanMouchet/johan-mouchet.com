import clsx, { ClassValue } from "clsx";
import styles from "./AcademicQualification.module.scss";

export const AcademicQualification = ({
  degrees,
  className,
  ...props
}: {
  degrees: {
    establishmentName: string;
    establishmentLink: {
      url: string;
    };
    location: string;
    graduationYear: number;
    title: string;
  }[];
  className?: ClassValue;
} & React.HTMLProps<HTMLDivElement>) => {
  if (!degrees?.length) {
    return null;
  }

  return (
    <div
      className={clsx(styles["c-academic-qualifications"], className)}
      {...props}
    >
      {degrees.map((degree) => (
        <section
          className={styles["c-academic-qualification"]}
          key={degree.title}
        >
          <h3 className={styles["c-academic-qualification__heading"]}>
            <a
              className={styles["c-academic-qualification__establishment"]}
              href={degree.establishmentLink.url}
            >
              {degree.establishmentName}
            </a>
            , {degree.location}
          </h3>
          <div className={styles["c-academic-qualification__title"]}>
            {degree.title}
          </div>
          <time
            className={styles["c-academic-qualification__graduation-year"]}
            dateTime={`${degree.graduationYear}`}
          >
            {degree.graduationYear}
          </time>
        </section>
      ))}
    </div>
  );
};
