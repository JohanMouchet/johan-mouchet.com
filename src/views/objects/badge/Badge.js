// @flow

import * as React from "react";
import cx from "classnames";
import "./badge.scss";

type Props = {
  metadata?: {
    contextClass?: string,
    additionalClasses?: Array<string>
  }
};

const Badge = (props: Props) => {
  const {
    metadata: { contextClass, additionalClasses },
    children
  } = props;

  const BadgeClass = cx("o-badge", contextClass, additionalClasses);

  return <span className={BadgeClass}>{children}</span>;
};

export default Badge;
