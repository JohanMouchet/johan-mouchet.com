// @flow

import * as React from "react";
import cx from "classnames";
import "./Blockquote.scss";

type Props = {
  quote: Node,
  cite?: Node,
  pulled?: boolean,
  extraClasses?: string | Array | Object
};

const Blockquote = (props: Props) => {
  const { quote, cite, pulled, extraClasses } = props;

  const BlockquoteClass = cx("o-blockquote", extraClasses, "wow", {
    "o-blockquote--pulled": pulled
  });

  return (
    <blockquote className={BlockquoteClass}>
      <div className="o-blockquote__quotes">{quote}</div>
      {cite && <cite className="o-blockquote__cite">{cite}</cite>}
    </blockquote>
  );
};

export default Blockquote;
