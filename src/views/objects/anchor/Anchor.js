// @flow

import * as React from "react";

type Props = {
  tag: string,
  url: string,
  id: string,
  marker: string,
  metadata?: {
    contextClass?: string,
    attributes?: { [key: string]: any }
  },
  children?: Node
};

const Anchor = (props: Props) => {
  const { tag, url, id, marker, metadata, children } = props;

  const Tag = tag;

  return (
    id && (
      <Tag id={id} className="u-anchor" {...metadata.attributes}>
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
