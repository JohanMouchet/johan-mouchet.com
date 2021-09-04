import React from "react";
import cx from "classnames";
import styles from "./Tooltip.module.scss";

type Props = {
  content: string;
  position?: "top" | "right" | "bottom" | "left";
  indicator?: boolean;
  multiLines?: boolean;
  className?: string | string[] | { [key: string]: boolean };
  attributes?: boolean | number | string;
  children: React.ReactNode;
};

const Tooltip: React.FC<Props> = ({
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

  return (
    <span className={classNames} tabIndex={0} {...attributes}>
      {children}
      <span className="o-tooltip__content">{content}</span>
    </span>
  );
};

export default Tooltip;
