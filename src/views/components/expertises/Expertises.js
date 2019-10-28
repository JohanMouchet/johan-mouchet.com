// @flow

import * as React from "react";
import { ProgressBar } from "views/objects";

type Props = {
  expertises: typeof ProgressBar
};

// TODO: rename "skills"?

const Expertises = (props: Props) => {
  const { expertises } = props;

  return !expertises ? null : (
    <ul className="c-expertises o-list--unstyled">
      {expertises.map(expertise => (
        <li className="c-expertise" key={expertise.label}>
          <ProgressBar
            label={expertise.label}
            filling={expertise.filling}
            tooltip={expertise.tooltip}
            tooltipOnHover
          />
        </li>
      ))}
    </ul>
  );
};

export default Expertises;
