import * as React from "react";
import "./AcademicQualification.scss";

type Props = {
  qualifications: Array<{
    establishment: {
      name: string;
      url: string;
    };
    location: string;
    graduationYear: number;
    title: string;
  }>;
};

const AcademicQualification: React.FC<Props> = ({ qualifications }) =>
  !qualifications?.length ? null : (
    <>
      {qualifications.map((qualification) => (
        <section className="c-academic-qualification" key={qualification.title}>
          <h3 className="c-academic-qualification__heading">
            <a
              className="c-academic-qualification__establishment"
              href={qualification.establishment.url}
            >
              {qualification.establishment.name}
            </a>
            , {qualification.location}
          </h3>
          <span className="c-academic-qualification__graduation-year">
            {qualification.graduationYear}
          </span>
          <p className="c-academic-qualification__title">
            {qualification.title}
          </p>
        </section>
      ))}
    </>
  );

export default AcademicQualification;
