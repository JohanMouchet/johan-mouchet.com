import * as React from "react";
import cx from "classnames";
import "./Aside.scss";

type Props = {
  margin?: "no-margin";
  className?: string | Array<string> | Object;
  children: Node;
};

const Aside = ({ margin, className, children }: Props) => {
  const classNames = cx("p-aside", margin && `p-main--${margin}`, className);

  return <aside className={classNames}>{children}</aside>;
};

export default Aside;
