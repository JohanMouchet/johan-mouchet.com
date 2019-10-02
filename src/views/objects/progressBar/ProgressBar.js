// @flow

import * as React from "react";
import cx from "./node_modules/classnames";
import "./progress-bar.scss";

type Props = {
  label: ?string,
  total: ?string,
  filling: int,
  tooltip: ?string,
  metadata: {
    contextClass: ?string,
    additionalClasses: ?Array<string>,
    modifierClasses: ?Array<string>,
    attributes: ?{ [key: string]: any }
  }
};

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
        <span className="o-progress-bar__label">{props.label | raw}</span>
      )}
      {props.total && (
        <span className="o-progress-bar__total">{props.total | raw}</span>
      )}
      <div className="o-progress-bar__container">
        <div
          className="o-progress-bar__filling wow"
          style={`width: ${props.filling}%`}
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
