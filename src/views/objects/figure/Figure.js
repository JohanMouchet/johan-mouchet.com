// @flow

import * as React from "react";
import cx from "classnames";
import "./___.scss";

/**
 * Figure
 *
 * @param {string} src                          - Figure image source
 * @param {string} [alt]                        - Figure image alt
 * @param {string} [title]                      - Figure image title
 * @param {string} [metadata.contextClass]      - Figure context class
 * @param {array}  [metadata.modifierClasses]   - Figure modifiers classes
 * @param {array}  [metadata.additionalClasses] - Figure additional classes
 * @param {object} [metadata.attributes]        - Figure attributes
 */

const ___ = (props: Props) => {
  const { prop1, prop2 } = props;

  const ___Class = cx(
    "o-figure",
    props.metadata.contextClass,
    props.metadata.modifierClasses,
    props.metadata.additionalClasses,
    {
      prop1: "___--prop1"
    }
  );

  return (
    <figure className={___Class}>
      <img
        className={"o-figure__img" | contextClass(contextClass)}
        src={props.src}
        alt={props.alt}
        title={props.title}
        {...props.metadata.attributes}
      />
      {props.caption && (
        <figcaption
          className={"o-figure__caption" | contextClass(contextClass)}
        >
          {props.caption | raw}
        </figcaption>
      )}
    </figure>
  );
};

___.defaultProps = {
  prop1: 2
};

export default ___;
