import React from "react";
import cx from "classnames";
import styles from "./Aside.module.scss";

type Props = {
  margin?: "no-margin";
  className?: string | string[] | { [key: string]: boolean };
  children: React.ReactNode;
};

const Aside: React.FC<Props> = ({ margin, className, children }) => {
  const classNames = cx("p-aside", margin && `p-main--${margin}`, className);

  return <aside className={classNames}>{children}</aside>;
};

export default Aside;
