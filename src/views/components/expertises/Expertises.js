// @flow

import * as React from "react";
import { ProgressBar } from "../objects";

/**
 * @param {array}  expertises 		      - List of expertise
 * @param {string} expertises[0].label   - Expertise label
 * @param {int}    expertises[0].filling - Expertise filling
 * @param {int}    expertises[0].tooltip - Expertise tooltip
 */

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
