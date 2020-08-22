import React from "react";
import cx from "classnames";
import "./Loader.scss";

type Props = {
  size?: "sm";
  className?: string | string[] | { [key: string]: boolean };
};

const Loader: React.FC<Props> = ({ size, className }) => {
  const classNames = cx("o-loader", size && `o-loader--${size}`, className);

  return <div className={classNames}></div>;
};

export default Loader;
