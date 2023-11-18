import React from "react";
import cx from "classnames";
import styles from "./ProgressBar.module.scss";

type Props = {
  label?: string;
  progress?: string;
  progressPct?: boolean;
  total?: string;
  detailsOnHover?: boolean;
  filling: number;
  className?: string | string[] | { [key: string]: boolean };
};

const ProgressBar: React.FC<Props> = ({
  label,
  progress,
  progressPct,
  total,
  detailsOnHover,
  filling = 0,
  className,
}) => {
  const classNames = cx(
    styles["o-progress-bar"],
    className,
    detailsOnHover && styles["o-progress-bar--details-on-hover"]
  );

  const clampedFilling = Math.min(Math.max(0, filling), 100);

  return (
    <div className={classNames} tabIndex={detailsOnHover ? 0 : undefined}>
      {(label || progress || total) && (
        <span className={styles["o-progress-bar__labels"]}>
          {label && (
            <span className={styles["o-progress-bar__label"]}>{label}</span>
          )}

          {(progress || total) && (
            <span className={styles["o-progress-bar__details"]}>
              {progress && (
                <span className={styles["o-progress-bar__progress"]}>
                  {progressPct ? `${clampedFilling}%` : progress}
                </span>
              )}

              {progress && total && <>&nbsp;/&nbsp;</>}

              {total && (
                <span className={styles["o-progress-bar__total"]}>{total}</span>
              )}
            </span>
          )}
        </span>
      )}

      <div className={styles["o-progress-bar__container"]}>
        <div
          className={styles["o-progress-bar__filling"]}
          style={{ width: `${clampedFilling}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
