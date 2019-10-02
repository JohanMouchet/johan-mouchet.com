// @flow

import * as React from "react";
import cx from "classnames";
import "./badge.scss";

type Props = {
  content: string,
  metadata: {
    contextClass: ?string,
    additionalClasses: ?Array<string>
  }
};

const Badge = (props: Props) => {
  const { prop1, prop2 } = props;

  const BadgeClass = cx(
    "o-badge",
    props.metadata.contextClass,
    props.metadata.additionalClasses,
    {
      "Badge--prop1": prop1
    }
  );

  return <span className={BadgeClass}>{props.content}</span>;
};

Badge.defaultProps = {
  prop1: 2
};

export default Badge;
