// @flow

import * as React from "react";
import cx from "classnames";
import "./Loader.scss";

type Props = {
  size: "sm",
  metadata?: {
    contextClass?: string,
    additionalClasses?: Array<string>
  }
};

const Loader = (props: Props) => {
  const { size, metadata = {} } = props;

  const LoaderClass = cx(
    "o-loader",
    { [`o-loader--${size}`]: size },
    metadata.contextClass,
    metadata.additionalClasses
  );

  return <div className={LoaderClass}></div>;
};

export default Loader;
