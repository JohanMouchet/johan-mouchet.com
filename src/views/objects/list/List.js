// @flow

import * as React from "react";
import cx from "classnames";
import "./List.scss";

type Props = {
  as?: "ul" | "ol",
  unstyled?: boolean,
  inline?: boolean,
  striped?: "horizontal" | "vertical",
  size?: "lg",
  linkBlock?: boolean,
  className?: string | Array<string> | Object,
  attributes?: boolean | number | string,
  children: Node,
};

const List = ({
  as = "ul",
  unstyled,
  inline,
  striped,
  size,
  linkBlock,
  className,
  children,
  ...attributes
}: Props) => {
  const classNames = cx(
    "o-list",
    unstyled && `o-list--unstyled`,
    inline && `o-list--inline`,
    striped &&
      `o-list--${striped === "horizontal" ? "h" : "v"}Striped o-list--unstyled`,
    size && `o-list--${size}`,
    linkBlock && `o-list--linkBlock`,
    className
  );

  const Tag = as;

  return <Tag className={classNames}>{children}</Tag>;
};

export default List;
