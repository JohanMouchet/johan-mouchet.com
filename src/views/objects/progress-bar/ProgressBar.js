// @flow

import * as React from "react";
import cx from "classnames";
import "./ProgressBar.scss";

type Props = {
  label?: string,
  total?: string,
  filling: number,
  tooltip?: string,
  tooltipOnHover?: boolean,
  className?: string | Array<string> | Object,
};

const ProgressBar = ({
  label,
  total,
  filling = 0,
  tooltip,
  tooltipOnHover,
  className,
}: Props) => {
  const classNames = cx(
    "o-progress-bar",
    className,
    tooltipOnHover && "o-progress-bar--tooltip-hover"
  );

  return (
    <div className={classNames} tabIndex={tooltip && tooltipOnHover && "0"}>
      {label && <span className="o-progress-bar__label">{label}</span>}
      {total && <span className="o-progress-bar__total">{total}</span>}
      <div className="o-progress-bar__container">
        <div
          className="o-progress-bar__filling"
          style={{ width: filling + "%" }}
          data-progress-bar-tooltip={tooltip}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
