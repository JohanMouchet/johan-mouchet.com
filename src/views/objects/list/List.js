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
  attributes?: { [key: string]: any },
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
  attributes,
  children,
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

// TODO: check if empty
// TODO: key

// const items = [
//   {
//     unstyled: true,
//     as: "ul",
//     items: [
//       "li 1",
//       "li 2",
//       "li 3",
//       {
//         unstyled: true,
//         as: "ul",
//         items: [
//           "child 1",
//           "child 2",
//           "child 3",
//           {
//             as: "ul",
//             items: ["grandchild 1", "grandchild 2", "grandchild 3"],
//           },
//         ],
//       },
//     ],
//   },
// ];
