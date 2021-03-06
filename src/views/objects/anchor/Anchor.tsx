import React from "react";
import cx from "classnames";
import "./Anchor.scss";

type Props = {
  as: keyof JSX.IntrinsicElements;
  id: string;
  marker?: string;
  className?: string | string[] | { [key: string]: boolean };
  attributes?: boolean | number | string;
  children?: React.ReactNode;
};

const Anchor: React.FC<Props> = ({
  as = "span",
  id,
  marker = "#",
  className,
  children,
  ...attributes
}) => {
  const classNames = cx("o-anchor", className);

  const Tag = as;

  return !id ? null : (
    <Tag className={classNames} {...attributes}>
      <a
        href={`#${id}`}
        id={id}
        className="o-anchor__link"
        aria-label={`Permalink for ${children}`}
      >
        <span aria-hidden>{marker}</span>
      </a>
      {children}
    </Tag>
  );
};

export default Anchor;
