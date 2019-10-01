// @flow

import * as React from "react";
import cx from "./node_modules/classnames";
import "./progress-bar.scss";

/**
 * @param {string} [label]                      - ProgressBar label
 * @param {string} [total]                      - ProgressBar total
 * @param {int}    filling                      - ProgressBar filling percent
 * @param {string} [tooltip]                    - ProgressBar tooltip
 * @param {string} [metadata.contextClass]      - ProgressBar context class
 * @param {array}  [metadata.additionalClasses] - ProgressBar additional classes
 * @param {array}  [metadata.modifierClasses]   - ProgressBar modifiers classes
 * @param {object} [metadata.attributes]        - ProgressBar attributes
 */

const ProgressBar = (props: Props) => {
  const { prop1, prop2 } = props;

  const ProgressBarClass = cx(
    "o-progress-bar",
    props.metadata.contextClass,
    props.metadata.modifierClasses,
    props.metadata.additionalClasses,
    {
      "ProgressBar--prop1": prop1
    }
  );

  return (
    <div className={ProgressBarClass}>
      {props.label && (
        <span className="o-progress-bar__label">
          {props.label | raw}
        </span>
      )}
      {props.total && (
        <span className="o-progress-bar__total">
          {props.total | raw}
        </span>
      )}
      <div className="o-progress-bar__container">
        <div
          className="o-progress-bar__filling wow"
          style="width: { props.filling }%"
          data-progress-bar-tooltip={props.tooltip | raw}
        ></div>
      </div>
    </div>
  );
};

ProgressBar.defaultProps = {
  prop1: 2
};

export default ProgressBar;
