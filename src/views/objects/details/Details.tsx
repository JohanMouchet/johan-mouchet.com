import React from "react";
import cx from "classnames";
import "./Details.scss";

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
    "o-details",
    variant && `o-details--${variant}`,
    className
  );

  return !children ? null : (
    <details className={classNames} {...attributes}>
      {summary && <summary className="o-details__summary">{summary}</summary>}
      <div className="o-details__panel">{children}</div>
    </details>
  );
};

export default Details;
