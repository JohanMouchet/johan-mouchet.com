// @flow

import * as React from "react";
import cx from "classnames";
import "./Badge.scss";

type Props = {
  metadata?: {
    contextClass?: string,
    additionalClasses?: Array<string>
  }
};

const Badge = (props: Props) => {
  const { metadata = {}, children } = props;

  const BadgeClass = cx(
    "o-badge",
    metadata.contextClass,
    metadata.additionalClasses
  );

  return <span className={BadgeClass}>{children}</span>;
};

export default Badge;
