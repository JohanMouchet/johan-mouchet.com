// @flow

import * as React from "react";
import cx from "classnames";
import "./figure.scss";

type Props = {
  src: string,
  alt?: string,
  title?: string,
  metadata?: {
    contextClass?: string,
    additionalClasses?: Array<string>,
    modifierClasses?: Array<string>,
    attributes?: { [key: string]: any }
  },
  children?: Node
};

const Figure = (props: Props) => {
  const { prop1, metadata = {}, children } = props;

  const FigureClass = cx(
    "o-figure",
    metadata.contextClass,
    metadata.modifierClasses,
    metadata.additionalClasses,
    {
      "Figure--prop1": prop1
    }
  );

  return (
    <figure className={FigureClass}>
      <img
        className="o-figure__img"
        src={src}
        alt={alt}
        title={title}
        {...metadata.attributes}
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
