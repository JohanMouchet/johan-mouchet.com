// @flow

import * as React from "react";
import cx from "classnames";

type Props = {
  tag: string,
  id: string,
  marker: string,
  className?: string | Array<string> | Object,
  attributes?: { [key: string]: any },
  children?: Node
};

const Anchor = ({
  tag,
  id,
  marker,
  className,
  attributes,
  children
}: Props) => {
  const classNames = cx("u-anchor", className);

  const Tag = tag;

  return (
    id && (
      <Tag id={id} className={classNames} {...attributes}>
        <a href={`#${id}`} className="u-anchor__link">
          {marker}
        </a>
        {children}
      </Tag>
    )
  );
};

Anchor.defaultProps = {
  tag: "span",
  marker: "#"
};

export default Anchor;
