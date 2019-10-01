// @flow

import * as React from "react";
import "./academic-qualification.scss";

type Props = {
  qualifications: array,
  qualifications[0].establishment.name: string,
  qualifications[0].establishment.URL: string,
  qualifications[0].location: string,
  qualifications[0].graduationYear: int,
  qualifications[0].title: string,
};

const AcademicQualification = (props: Props) => {
  const { prop1, prop2 } = props;

  return props.qualifications.map(qualification => (
    <section className="c-academic-qualification">
      <h3 className="c-academic-qualification__heading">
        <a
          className="c-academic-qualification__establishment"
          href={qualification.establishment.URL}
        >
          {qualification.establishment.name}
        </a>
        , {qualification.location}
      </h3>
      <span className="c-academic-qualification__graduation-year">
        {qualification.graduationYear}
      </span>
      <p className="c-academic-qualification__title">{qualification.title}</p>
    </section>
  ));
};

AcademicQualification.defaultProps = {
  prop1: 2
};

export default AcademicQualification;
