// @flow

import * as React from "react";
import { ProgressBar } from "../objects";

type Props = {
  expertises: [
    {
      label: string,
      filling: int,
      tooltip: int
    }
  ]
};

const Expertises = (props: Props) => {
  const { prop1, prop2 } = props;

  return (
    <ul className="c-expertises o-list--unstyled">
      {props.expertises.map(expertise => (
        <li className="c-expertise">
          <ProgressBar
            props={{
              label: expertise.label,
              filling: expertise.filling,
              tooltip: expertise.tooltip,
              metadata: {
                modifierClasses: ["tooltip-hover"]
              }
            }}
          />
        </li>
      ))}
    </ul>
  );
};

Expertises.defaultProps = {
  prop1: 2
};

export default Expertises;
