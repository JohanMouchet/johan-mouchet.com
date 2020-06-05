// @flow

import * as React from "react";
import cx from "classnames";
import "./Figure.scss";

type Props = {
  src: string,
  alt?: string,
  title?: string,
  centered?: boolean,
  className?: string | Array<string> | Object,
  attributes?: boolean | number | string,
  children?: Node,
};

const Figure = ({
  src,
  alt,
  title,
  centered,
  className,
  children,
  ...attributes
}: Props) => {
  const classNames = cx(
    "o-figure",
    centered && `o-figure--centered`,
    className
  );

  return (
    <figure className={classNames}>
      <img
        className="o-figure__img"
        src={src}
        alt={alt}
        title={title}
        loading="lazy"
        {...attributes}
      />
      {children && (
        <figcaption className="o-figure__caption">{children}</figcaption>
      )}
    </figure>
  );
};

export default Figure;
