import * as React from "react";
import cx from "classnames";
import "./Main.scss";

type Props = {
  margin?: "no-margin";
  className?: string | string[] | { [key: string]: boolean };
  children: React.ReactNode;
};

const Main: React.FC<Props> = ({ margin, className, children }) => {
  const classNames = cx("p-main", margin && `p-main--${margin}`, className);

  return <main className={classNames}>{children}</main>;
};

export default Main;
