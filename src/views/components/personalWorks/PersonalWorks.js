// @flow

import * as React from "react";
import "./personal-works.scss";

type Props = {
  works: [{ video: boolean, thumbnailPath: string, sourceIcon: Array<mixed> }]
};

const PersonalWorks = (props: Props) => {
  const { prop1, prop2 } = props;

  return !props.works ? null : (
    <div className="c-personal-works">
      <div className="grid">
        {props.works.map(work => (
          <div className="cell cell--6-@xs cell--4-@sm cell--2-@md">
            <section className="c-personal-work">
              <a
                className="c-personal-work__overlay"
                href={work.URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="c-personal-work__thumbnail"
                  src={work.thumbnailPath}
                  alt="Personal work"
                />
                {work.sourceIcon && (
                  <span className="c-personal-work__source">
                    {work.sourceIcon}
                  </span>
                )}
              </a>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

PersonalWorks.defaultProps = {
  prop1: 2
};

export default PersonalWorks;
