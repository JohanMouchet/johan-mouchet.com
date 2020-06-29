import * as React from "react";
import cx from "classnames";
import "./Details.scss";

type Props = {
  summary?: string;
  variant?: "compact";
  className?: string | Array<string> | Object;
  attributes?: boolean | number | string;
  children: Node;
};

const Details = ({
  summary = "Details",
  variant,
  className,
  children,
  ...attributes
}: Props) => {
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
