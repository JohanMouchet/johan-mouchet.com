// @flow

import * as React from "react";
import cx from "classnames";
import "./___.scss";
import { ProgressBar } from "../../objects/";

/**
 * Expertises
 *
 * @param {array}  expertises 		      - List of expertise
 * @param {string} expertises[0].label   - Expertise label
 * @param {int}    expertises[0].filling - Expertise filling
 * @param {int}    expertises[0].tooltip - Expertise tooltip
 */

const ___ = (props: Props) => {
  const { prop1, prop2 } = props;

  const ___Class = cx("___", {
    "___--prop1": prop1
  });

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

___.defaultProps = {
  prop1: 2
};

export default ___;
