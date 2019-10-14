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
  const { prop1, prop2, children } = props;

  const FigureClass = cx(
    "o-figure",
    props.metadata.contextClass,
    props.metadata.modifierClasses,
    props.metadata.additionalClasses,
    {
      "Figure--prop1": prop1
    }
  );

  return (
    <figure className={FigureClass}>
      <img
        className="o-figure__img"
        src={props.src}
        alt={props.alt}
        title={props.title}
        {...props.metadata.attributes}
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
