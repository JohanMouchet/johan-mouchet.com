import * as React from "react";
import cx from "classnames";
import "./ProgressBar.scss";

type Props = {
  label?: string;
  progress?: string;
  progressPct?: boolean;
  total?: string;
  detailsOnHover?: boolean;
  filling: number;
  className?: string | Array<string> | Object;
};

const ProgressBar = ({
  label,
  progress,
  progressPct,
  total,
  detailsOnHover,
  filling = 0,
  className,
}: Props) => {
  const classNames = cx(
    "o-progress-bar",
    className,
    detailsOnHover && "o-progress-bar--details-on-hover"
  );

  const clampedFilling = Math.min(Math.max(0, parseInt(filling)), 100);

  return (
    <div className={classNames} tabIndex={detailsOnHover && "0"}>
      {(label || progress || total) && (
        <span className="o-progress-bar__labels">
          {label && <span className="o-progress-bar__label">{label}</span>}

          {(progress || total) && (
            <span className="o-progress-bar__details">
              {progress && (
                <span className="o-progress-bar__progress">
                  {progressPct ? `${clampedFilling}%` : progress}
                </span>
              )}

              {progress && total && <>&nbsp;/&nbsp;</>}

              {total && <span className="o-progress-bar__total">{total}</span>}
            </span>
          )}
        </span>
      )}

      <div className="o-progress-bar__container">
        <div
          className="o-progress-bar__filling"
          style={{ width: `${clampedFilling}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
