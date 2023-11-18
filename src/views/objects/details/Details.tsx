import React from "react";
import cx from "classnames";
import styles from "./Details.module.scss";

type Props = {
  summary?: string;
  variant?: "compact";
  className?: string | string[] | { [key: string]: boolean };
  attributes?: boolean | number | string;
  children: React.ReactNode;
};

const Details: React.FC<Props> = ({
  summary = "Details",
  variant,
  className,
  children,
  ...attributes
}) => {
  const classNames = cx(
    styles["o-details"],
    variant && styles[`o-details--${variant}`],
    className
  );

  return !children ? null : (
    <details className={classNames} {...attributes}>
      {summary && (
        <summary className={styles["o-details__summary"]}>{summary}</summary>
      )}
      <div className={styles["o-details__panel"]}>{children}</div>
    </details>
  );
};

export default Details;
