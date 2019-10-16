// @flow

import * as React from "react";
import { ProgressBar } from "../../objects";

type Props = {
  expertises: typeof ProgressBar
};

const Expertises = (props: Props) => {
  const { expertises } = props;

  return !expertises ? null : (
    <ul className="c-expertises o-list--unstyled">
      {expertises.map(expertise => (
        <li className="c-expertise">
          <ProgressBar
            props={{
              label: expertise.label,
              filling: expertise.filling,
              tooltip: expertise.tooltip,
              tooltipOnHover: true
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default Expertises;
