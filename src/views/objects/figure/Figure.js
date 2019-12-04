// @flow

import * as React from "react";
import cx from "classnames";
import "./Figure.scss";

type Props = {
  src: string,
  alt?: string,
  title?: string,
  centered?: boolean,
  extraClasses?: string | Array | Object,
  attributes?: { [key: string]: any },
  children?: Node
};

const Figure = (props: Props) => {
  const { src, alt, title, centered, extraClasses, attributes, children } = props;

  const FigureClass = cx(
    "o-figure",
    {
      [`o-figure--centered`]: centered
    },
    extraClasses
  );

  return (
    <figure className={FigureClass}>
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

Figure.defaultProps = {
  prop1: 2
};

export default Figure;
