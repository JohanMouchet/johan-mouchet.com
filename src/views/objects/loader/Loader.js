// @flow

import * as React from "react";
import cx from "classnames";
import "./Loader.scss";

type Props = {
  size: "sm",
  className?: string | Array | Object
};

const Loader = (props: Props) => {
  const { size, className } = props;

  const LoaderClass = cx("o-loader", size && `o-loader--${size}`, className);

  return <div className={LoaderClass}></div>;
};

export default Loader;
