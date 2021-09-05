import React from "react";
import cx from "classnames";
import styles from "./Aside.module.scss";

type Props = {
  margin?: "no-margin";
  className?: string | string[] | { [key: string]: boolean };
  children: React.ReactNode;
};

const Aside: React.FC<Props> = ({ margin, className, children }) => {
  const classNames = cx(
    styles["p-aside"],
    margin && styles[`p-main--${margin}`],
    className
  );

  return <aside className={classNames}>{children}</aside>;
};

export default Aside;
