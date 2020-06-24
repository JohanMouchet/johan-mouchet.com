// @flow

import * as React from "react";
import cx from "classnames";
import "./Tooltip.scss";

type Props = {
  as: string,
  content: string,
  position: "top" | "right" | "bottom" | "left",
  indicator: boolean,
  multiLines: boolean,
  className?: string | Array<string> | Object,
  attributes?: boolean | number | string,
  children: Node,
};

const Tooltip = ({
  as = "span",
  content,
  position = "top",
  indicator,
  multiLines,
  className,
  children,
  ...attributes
}: Props) => {
  const classNames = cx(
    "o-tooltip",
    position && `o-tooltip--${position}`,
    indicator && "o-tooltip--indicator",
    multiLines && "o-tooltip--multi-lines",
    className
  );

  const Tag = as;

  return (
    <Tag className={classNames} {...attributes}>
      {children}
      <span className="o-tooltip__content">{content}</span>
    </Tag>
  );
};

export default Tooltip;
