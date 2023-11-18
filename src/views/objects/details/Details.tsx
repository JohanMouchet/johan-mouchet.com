import clsx, { ClassValue } from "clsx";
import styles from "./Details.module.scss";

export const Details = ({
  summary = "Details",
  variant,
  children,
  className,
  ...props
}: {
  summary?: string;
  variant?: "compact";
  children: React.ReactNode;
  className?: ClassValue;
} & React.HTMLProps<HTMLDetailsElement>) => {
  const classNames = clsx(
    styles["o-details"],
    variant && styles[`o-details--${variant}`],
    className
  );

  return !children ? null : (
    <details className={classNames} {...props}>
      {summary && (
        <summary className={styles["o-details__summary"]}>{summary}</summary>
      )}
      <div className={styles["o-details__panel"]}>{children}</div>
    </details>
  );
};
