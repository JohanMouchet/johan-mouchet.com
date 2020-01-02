// @flow

import * as React from "react";
import cx from "classnames";
import "./Badge.scss";

type Props = {
  className?: string | Array | Object
};

const Badge = (props: Props) => {
  const { className, children } = props;

  const BadgeClass = cx("o-badge", className);

  return <span className={BadgeClass}>{children}</span>;
};

export default Badge;
