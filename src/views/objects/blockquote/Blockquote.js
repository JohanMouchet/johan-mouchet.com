// @flow

import * as React from "react";
import cx from "classnames";
import "./blockquote.scss";

type Props = {
  quote: string,
  outerQuote: ?string,
  cite: ?string,
  metadata: {
    contextClass: ?string,
    modifierClasses: ?Array<string>,
    additionalClasses: ?Array<string>
  }
};

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
      <div className="o-blockquote__quotes">{props.quote | raw}</div>

      {props.outerQuote | raw}

      {props.cite && (
        <cite className="o-blockquote__cite">{props.cite | raw}</cite>
      )}
    </blockquote>
  );
};

Blockquote.defaultProps = {
  prop1: 2
};

export default Blockquote;
