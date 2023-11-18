import React from "react";
import styles from "./AcademicQualification.module.scss";

type Props = {
  degrees: Array<{
    establishmentName: string;
    establishmentLink: {
      url: string;
    };
    location: string;
    graduationYear: number;
    title: string;
  }>;
};

const AcademicQualification: React.FC<Props> = ({ degrees }) =>
  !degrees?.length ? null : (
    <div className={styles["c-academic-qualifications"]}>
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
            , {degree.location} ⁠—{" "}
            <span className={styles["c-academic-qualification__title"]}>
              {degree.title}
            </span>
          </h3>
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

export default AcademicQualification;
