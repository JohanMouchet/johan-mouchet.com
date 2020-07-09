import * as React from "react";
import cx from "classnames";
import "./Tooltip.scss";

type Props = {
  as?: keyof JSX.IntrinsicElements;
  content: string;
  position?: "top" | "right" | "bottom" | "left";
  indicator?: boolean;
  multiLines?: boolean;
  className?: string | string[] | { [key: string]: boolean };
  attributes?: boolean | number | string;
  children: React.ReactNode;
};

const Tooltip: React.FC<Props> = ({
  as = "span",
  content,
  position = "top",
  indicator = true,
  multiLines,
  className,
  children,
  ...attributes
}) => {
  const classNames = cx(
    "o-tooltip",
    position && `o-tooltip--${position}`,
    !indicator && "o-tooltip--no-indicator",
    multiLines && "o-tooltip--multi-lines",
    className
  );

  const Tag = as;

  return (
    <Tag className={classNames} tabIndex={0} {...attributes}>
      {children}
      <span className="o-tooltip__content">{content}</span>
    </Tag>
  );
};

export default Tooltip;
