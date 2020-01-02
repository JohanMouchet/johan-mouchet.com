// @flow

import * as React from "react";
import cx from "classnames";
import "./Badge.scss";

type Props = {
  className?: string | Array | Object
};

const Badge = (props: Props) => {
  const { className, children } = props;

  const classNames = cx("o-badge", className);

  return <span className={classNames}>{children}</span>;
};

export default Badge;
