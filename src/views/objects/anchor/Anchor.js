// @flow

import * as React from "react";
import cx from "classnames";

type Props = {
  tag: string,
  url: string,
  id: string,
  marker: string,
  extraClasses?: string | Array | Object,
  attributes?: { [key: string]: any },
  children?: Node
};

const Anchor = (props: Props) => {
  const { tag, url, id, marker, extraClasses, attributes, children } = props;

  const AnchorClass = cx("u-anchor", extraClasses);

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
