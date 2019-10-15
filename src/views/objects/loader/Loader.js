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
  const { metadata = {} } = props;

  const LoaderClass = cx(
    "o-loader",
    metadata.contextClass,
    metadata.modifierClasses,
    metadata.additionalClasses
  );

  return <div className={LoaderClass}></div>;
};

export default Loader;
