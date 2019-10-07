// @flow

import * as React from "react";
import cx from "./node_modules/classnames";
import "./progress-bar.scss";

type Props = {
  label?: Node,
  total?: Node,
  filling: number,
  tooltip?: Node,
  tooltipOnHover: boolean,
  metadata: {
    contextClass?: string,
    additionalClasses?: Array<string>
  }
};

const ProgressBar = (props: Props) => {
  const { label, total, filling, tooltip, tooltipOnHover, metadata } = props;

  const ProgressBarClass = cx(
    "o-progress-bar",
    metadata.contextClass,
    metadata.additionalClasses,
    {
      "o-progress-bar--tooltip-hover": tooltipOnHover
    }
  );

  return (
    <div className={ProgressBarClass}>
      {label && <span className="o-progress-bar__label">{label}</span>}
      {total && <span className="o-progress-bar__total">{total}</span>}
      <div className="o-progress-bar__container">
        <div
          className="o-progress-bar__filling wow"
          style={`width: ${filling}%`}
          data-progress-bar-tooltip={tooltip}
        ></div>
      </div>
    </div>
  );
};

ProgressBar.defaultProps = {
  filling: 0
};

export { ProgressBar, Props };
