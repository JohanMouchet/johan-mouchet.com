// @flow

import * as React from "react";
import cx from "classnames";
import "./Badge.scss";

type Props = {
  extraClasses?: string | Array | Object
};

const Badge = (props: Props) => {
  const { extraClasses, children } = props;

  const BadgeClass = cx("o-badge", extraClasses);

  return <span className={BadgeClass}>{children}</span>;
};

export default Badge;
