// @flow

import * as React from "react";
import cx from "classnames";
import "./Details.scss";

type Props = {
  summary?: Node,
  className?: string | Array<string> | Object,
  attributes?: { [key: string]: any },
  children: Node
};

const Details = ({
  summary = "Details",
  className,
  attributes,
  children
}: Props) => {
  const classNames = cx("o-details", className);

  return !children ? null : (
    <details className={classNames} {...attributes}>
      {summary && <summary className="o-details__summary">{summary}</summary>}
      <div className="o-details__panel">{children}</div>
    </details>
  );
};

export default Details;
