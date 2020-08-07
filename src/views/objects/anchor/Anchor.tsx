import * as React from "react";
import cx from "classnames";
import "./Anchor.scss";

type Props = {
  id: string;
  marker?: string;
  className?: string | string[] | { [key: string]: boolean };
  attributes?: boolean | number | string;
};

const Anchor: React.FC<Props> = ({
  id,
  marker = "#",
  className,
  ...attributes
}) => {
  const classNames = cx("o-anchor", className);

  return !id ? null : (
    <a
      className={classNames}
      href={`#${id}`}
      id={id}
      aria-hidden
      {...attributes}
    >
      {marker}
    </a>
  );
};

export default Anchor;
