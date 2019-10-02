// @flow

import * as React from "react";
import cx from "classnames";
import "./loader.scss";

type Props = {
  metadata.contextClass: ?string,
  metadata.modifierClasses: ?array,
  metadata.additionalClasses: ?array,
};

const Loader = (props: Props) => {
  const { prop1, prop2 } = props;

  const LoaderClass = cx(
    "o-loader",
    props.metadata.contextClass,
    props.metadata.modifierClasses,
    props.metadata.additionalClasses,
    {
      "Loader--prop1": prop1
    }
  );

  return <div className={LoaderClass}></div>;
};

Loader.defaultProps = {
  prop1: 2
};

export default Loader;
