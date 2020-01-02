// @flow

import * as React from "react";
import cx from "classnames";
import "./Figure.scss";

type Props = {
  src: string,
  alt?: string,
  title?: string,
  centered?: boolean,
  className?: string | Array | Object,
  attributes?: { [key: string]: any },
  children?: Node
};

const Figure = (props: Props) => {
  const { src, alt, title, centered, className, attributes, children } = props;

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
        {...attributes}
      />
      {children && (
        <figcaption className="o-figure__caption">{children}</figcaption>
      )}
    </figure>
  );
};

export default Figure;
