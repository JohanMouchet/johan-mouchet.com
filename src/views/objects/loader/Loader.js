// @flow

import * as React from "react";
import cx from "classnames";
import "./Loader.scss";

type Props = {
  size: "sm",
  extraClasses?: string | Array | Object
};

const Loader = (props: Props) => {
  const { size, extraClasses } = props;

  const LoaderClass = cx(
    "o-loader",
    { [`o-loader--${size}`]: size },
    extraClasses
  );

  return <div className={LoaderClass}></div>;
};

export default Loader;
