// @flow

import * as React from "react";
import "./academic-qualification.scss";

/**
 * @param {array}  qualifications 		                 - List of qualifications
 * @param {string} qualifications[0].establishment.name - Qualification establishment name
 * @param {string} qualifications[0].establishment.URL  - Qualification establishment URL
 * @param {string} qualifications[0].location           - Qualification location
 * @param {int}    qualifications[0].graduationYear     - Qualification graduationYear
 * @param {string} qualifications[0].title              - Qualification title
 */

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
