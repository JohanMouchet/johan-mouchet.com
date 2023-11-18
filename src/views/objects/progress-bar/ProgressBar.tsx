import clsx, { ClassValue } from "clsx";
import styles from "./ProgressBar.module.scss";

export const ProgressBar = ({
  label,
  progress,
  progressPct,
  total,
  detailsOnHover,
  filling = 0,
  className,
  ...props
}: {
  label?: string;
  progress?: string;
  progressPct?: boolean;
  total?: string;
  detailsOnHover?: boolean;
  filling: number;
  className?: ClassValue;
} & Omit<React.HTMLProps<HTMLDivElement>, "label">) => {
  const classNames = clsx(
    styles["o-progress-bar"],
    detailsOnHover && styles["o-progress-bar--details-on-hover"],
    className
  );

  const clampedFilling = Math.min(Math.max(0, filling), 100);

  return (
    <div
      className={classNames}
      tabIndex={detailsOnHover ? 0 : undefined}
      {...props}
    >
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
        />
      </div>
    </div>
  );
};
