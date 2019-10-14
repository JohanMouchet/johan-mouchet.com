// @flow

import * as React from "react";
import cx from "classnames";
import "./loader.scss";

type Props = {
  metadata?: {
    contextClass?: string,
    additionalClasses?: Array<string>,
    modifierClasses?: Array<string>
  }
};

const Loader = (props: Props) => {
  const LoaderClass = cx(
    "o-loader",
    props.metadata.contextClass,
    props.metadata.modifierClasses,
    props.metadata.additionalClasses
  );

  return <div className={LoaderClass}></div>;
};

export default Loader;
