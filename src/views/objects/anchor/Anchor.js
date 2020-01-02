// @flow

import * as React from "react";
import cx from "classnames";

type Props = {
  tag: string,
  url: string,
  id: string,
  marker: string,
  className?: string | Array | Object,
  attributes?: { [key: string]: any },
  children?: Node
};

const Anchor = (props: Props) => {
  const { tag, url, id, marker, className, attributes, children } = props;

  const AnchorClass = cx("u-anchor", className);

  const Tag = tag;

  return (
    id && (
      <Tag id={id} className={AnchorClass} {...attributes}>
        <a href={url + "#" + id} className="u-anchor__link">
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
