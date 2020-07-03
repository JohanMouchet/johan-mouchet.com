import * as React from "react";
import cx from "classnames";
import "./Badge.scss";

type Props = {
  className?: string | string[] | { [key: string]: boolean };
  children: React.ReactNode;
};

const Badge = ({ className, children }: Props) => {
  const classNames = cx("o-badge", className);

  return <span className={classNames}>{children}</span>;
};

export default Badge;
