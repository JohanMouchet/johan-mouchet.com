// @flow

import * as React from "react";
import "./reference.scss";

type Props = {
  requestOnly: boolean,
  references: [
    {
      name: string,
      relation: string,
      company: [
        {
          name: string,
          URL: string
        }
      ],
      jobTitle: string,
      contacts: [
        {
          mail: string,
          linkedin: string
        }
      ]
    }
  ]
};

const Reference = (props: Props) => {
  const { requestOnly, references } = props;

  return (
    <div className="grid">
      {requestOnly ? (
        <div className="cell cell--12-@xs">
          <p>
            <i>
              Available upon <a href="#p-contact">request</a>.
            </i>
          </p>
        </div>
      ) : !references ? null : (
        references.map(reference => (
          <div
            className="cell cell--12-@xs cell--6-@md cell--4-@lg"
            key={reference.name}
          >
            <section className="c-reference">
              <h3 className="c-reference__name">{reference.name}</h3>
              <div>
                <span className="c-reference__relation">
                  {reference.relation}
                </span>
                ,{" "}
                <span className="c-reference__company">
                  <a
                    href={reference.company.URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                  >
                    {reference.company.name}
                  </a>
                </span>{" "}
                ⁠—{" "}
                <span className="c-reference__job-title">
                  {reference.jobTitle}
                </span>
              </div>
              <ul className="c-reference__contacts o-list--unstyled">
                <li>
                  <a
                    className="c-reference__email"
                    href={`mailto:${reference.contacts.mail}`}
                  >
                    {reference.contacts.mail}
                  </a>
                </li>
                <li>
                  <a
                    className="c-reference__linkedin"
                    href={reference.contacts.linkedin}
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </section>
          </div>
        ))
      )}
    </div>
  );
};

Reference.defaultProps = {
  prop1: 2
};

export default Reference;
