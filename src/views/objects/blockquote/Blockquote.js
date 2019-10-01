// @flow

import * as React from "react";
import cx from "classnames";
import "./blockquote.scss";

/**
 * @param {string} quote                        - Blockquote quote
 * @param {string} [outerQuote]                 - Blockquote outer quote
 * @param {string} [cite]                       - Blockquote cite
 * @param {string} [metadata.contextClass]      - Blockquote context class
 * @param {array}  [metadata.modifierClasses]   - Blockquote modifiers classes
 * @param {array}  [metadata.additionalClasses] - Blockquote additional classes
 */

const Blockquote = (props: Props) => {
  const { prop1, prop2 } = props;

  const BlockquoteClass = cx(
    "o-blockquote",
    props.metadata.contextClass,
    props.metadata.modifierClasses,
    props.metadata.additionalClasses,
    "wow",
    {
      "Blockquote--prop1": prop1
    }
  );

  return (
    <blockquote className={BlockquoteClass}>
      <div className="o-blockquote__quotes">
        {props.quote | raw}
      </div>

      {props.outerQuote | raw}

      {props.cite && (
        <cite className="o-blockquote__cite">
          {props.cite | raw}
        </cite>
      )}
    </blockquote>
  );
};

Blockquote.defaultProps = {
  prop1: 2
};

export default Blockquote;
