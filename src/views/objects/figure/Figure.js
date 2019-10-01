// @flow

import * as React from "react";
import cx from "classnames";
import "./figure.scss";

/**
 * @param {string} src                          - Figure image source
 * @param {string} [alt]                        - Figure image alt
 * @param {string} [title]                      - Figure image title
 * @param {string} [metadata.contextClass]      - Figure context class
 * @param {array}  [metadata.modifierClasses]   - Figure modifiers classes
 * @param {array}  [metadata.additionalClasses] - Figure additional classes
 * @param {object} [metadata.attributes]        - Figure attributes
 */

const Figure = (props: Props) => {
  const { prop1, prop2 } = props;

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
      {props.caption && (
        <figcaption
          className="o-figure__caption"
        >
          {props.caption | raw}
        </figcaption>
      )}
    </figure>
  );
};

Figure.defaultProps = {
  prop1: 2
};

export default Figure;
