import * as React from "react";
import "./AcademicQualification.scss";

type Props = {
  degrees: Array<{
    establishment: {
      name: string;
      url: string;
    };
    location: string;
    graduationYear: number;
    title: string;
  }>;
};

const AcademicQualification: React.FC<Props> = ({ degrees }) =>
  !degrees?.length ? null : (
    <div className="c-academic-qualifications">
      {degrees.map((degree) => (
        <section className="c-academic-qualification" key={degree.title}>
          <h3 className="c-academic-qualification__heading">
            <a
              className="c-academic-qualification__establishment"
              href={degree.establishment.url}
            >
              {degree.establishment.name}
            </a>
            , {degree.location} ⁠—{" "}
            <span className="c-academic-qualification__title">
              {degree.title}
            </span>
          </h3>
          <span className="c-academic-qualification__graduation-year">
            {degree.graduationYear}
          </span>
        </section>
      ))}
    </div>
  );

export default AcademicQualification;
