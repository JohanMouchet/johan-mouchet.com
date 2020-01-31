// @flow

import * as React from "react";
import cx from "classnames";
import "./Blockquote.scss";

type Props = {
  quote: Node,
  cite?: Node,
  pulled?: boolean,
  className?: string | Array<string> | Object
};

const Blockquote = ({ quote, cite, pulled, className }: Props) => {
  const classNames = cx(
    "o-blockquote",
    className,
    "wow",
    pulled && "o-blockquote--pulled"
  );

  return (
    <blockquote className={classNames}>
      <div className="o-blockquote__quotes">{quote}</div>
      {cite && <cite className="o-blockquote__cite">{cite}</cite>}
    </blockquote>
  );
};

export default Blockquote;
