// @flow

import * as React from "react";
import cx from "classnames";

type Props = {
  as: string,
  id: string,
  marker: string,
  className?: string | Array<string> | Object,
  attributes?: { [key: string]: any },
  children?: Node,
};

const Anchor = ({
  as = "span",
  id,
  marker = "#",
  className,
  attributes,
  children,
}: Props) => {
  const classNames = cx("u-anchor", className);

  const Tag = as;

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

export default Anchor;
