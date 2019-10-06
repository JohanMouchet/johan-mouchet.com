// @flow

import * as React from "react";
import cx from "classnames";
import "./blockquote.scss";

type Props = {
  quote: Node,
  cite?: Node,
  pulled?: boolean,
  metadata: {
    contextClass?: string,
    additionalClasses?: Array<string>
  }
};

const Blockquote = (props: Props) => {
  const { quote, cite, pulled, metadata } = props;

  const BlockquoteClass = cx(
    "o-blockquote",
    metadata.contextClass,
    metadata.additionalClasses,
    "wow",
    {
      "o-blockquote--pulled": pulled
    }
  );

  return (
    <blockquote className={BlockquoteClass}>
      <div className="o-blockquote__quotes">{quote}</div>
      {cite && <cite className="o-blockquote__cite">{cite}</cite>}
    </blockquote>
  );
};

export default Blockquote;
