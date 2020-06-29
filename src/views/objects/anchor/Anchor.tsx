import * as React from "react";
import cx from "classnames";
import "./Anchor.scss";

type Props = {
  as: string;
  id: string;
  marker: string;
  className?: string | Array<string> | Object;
  attributes?: boolean | number | string;
  children?: Node;
};

const Anchor = ({
  as = "span",
  id,
  marker = "#",
  className,
  children,
  ...attributes
}: Props) => {
  const classNames = cx("o-anchor", className);

  const Tag = as;

  return (
    id && (
      <Tag id={id} className={classNames} {...attributes}>
        <a href={`#${id}`} className="o-anchor__link">
          {marker}
        </a>
        {children}
      </Tag>
    )
  );
};

export default Anchor;
